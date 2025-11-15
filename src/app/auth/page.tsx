'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  User,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  BarChart,
  MessageSquare,
  Users,
  PlayCircle,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { useAuth, useFirestore } from '@/firebase';
import Logo from '@/components/landing/Logo';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const signUpSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters.' }),
});

const signInSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

const SocialButton = ({
  provider,
  icon,
  children,
}: {
  provider: 'google' | 'github';
  icon: React.ReactNode;
  children: React.ReactNode;
}) => {
  // This would contain the logic to handle sign-in for a specific provider
  return (
    <Button variant="outline" className="w-full justify-center gap-3 py-6">
      {icon}
      <span className="text-base">{children}</span>
    </Button>
  );
};

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('sign-in');
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const auth = useAuth();
  const firestore = useFirestore();
  const router = useRouter();

  const signUpForm = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { email: '', password: '' },
  });

  const signInForm = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: '', password: '' },
  });

  const handleAuthSuccess = async (user: User) => {
    if (!firestore) return;
    const userRef = doc(firestore, 'users', user.uid);
    const userDoc = await getDoc(userRef);
    let userData;

    if (!userDoc.exists()) {
      const newUser = {
        email: user.email,
        displayName: user.displayName || user.email?.split('@')[0],
        photoURL: user.photoURL,
        subscriptionStatus: 'trial', // Default to trial
      };
      await setDoc(userRef, newUser);
      userData = newUser;
    } else {
      userData = userDoc.data();
    }

    toast({
      title: 'Success!',
      description: 'You have successfully logged in.',
    });

    if (
      userData.subscriptionStatus === 'active' ||
      userData.subscriptionStatus === 'trial'
    ) {
      router.push('/dashboard');
    } else {
      router.push('/pricing');
    }
  };

  const handleAuthError = (error: any, type: 'Sign-up' | 'Sign-in') => {
    toast({
      variant: 'destructive',
      title: `${type} Failed`,
      description: error.message || 'An unexpected error occurred.',
    });
  };

  const handleSignUp = async (values: z.infer<typeof signUpSchema>) => {
    if (!auth) return;
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      await handleAuthSuccess(userCredential.user);
    } catch (error: any) {
      handleAuthError(error, 'Sign-up');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignIn = async (values: z.infer<typeof signInSchema>) => {
    if (!auth) return;
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      await handleAuthSuccess(userCredential.user);
    } catch (error: any) {
      handleAuthError(error, 'Sign-in');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignIn = async (providerName: 'google' | 'github') => {
    if (!auth) return;
    setIsLoading(true);
    const provider =
      providerName === 'google'
        ? new GoogleAuthProvider()
        : new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      await handleAuthSuccess(result.user);
    } catch (error: any) {
      handleAuthError(error, 'Sign-in');
    } finally {
      setIsLoading(false);
    }
  };

  const FloatingLabelInput = ({
    name,
    label,
    type = 'text',
    form,
    icon,
  }: {
    name: 'email' | 'password';
    label: string;
    type?: string;
    form: any;
    icon: React.ReactNode;
  }) => {
    const { register, watch, formState: { errors } } = form;
    const value = watch(name);
    const hasError = !!errors[name];

    return (
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-gray/70">
          {icon}
        </div>
        <Input
          id={name}
          type={type}
          {...register(name)}
          className={cn(
            'peer h-16 pl-12 text-base transition-colors focus:border-electric-purple/50',
            hasError ? 'border-red-500' : 'border-slate-gray/20'
          )}
        />
        <label
          htmlFor={name}
          className={cn(
            'absolute left-12 top-1/2 -translate-y-1/2 transform cursor-text bg-white px-1 text-base text-slate-gray transition-all duration-300 peer-focus:-top-0 peer-focus:text-xs peer-focus:text-electric-purple',
            value ? '-top-0 text-xs' : '',
            hasError ? 'text-red-500 peer-focus:text-red-500' : ''
          )}
        >
          {label}
        </label>
        {name === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-gray"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
        {hasError && (
          <p className="mt-1 text-xs text-red-500">
            {(errors[name]?.message as string)}
          </p>
        )}
      </div>
    );
  };

  const GoogleIcon = () => (
    <svg viewBox="0 0 48 48" width="24" height="24">
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.223,0-9.651-3.343-11.303-8l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.901,36.63,44,30.63,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </svg>
  );

  const GitHubIcon = () => (
    <svg viewBox="0 0 16 16" width="24" height="24" fill="currentColor">
      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.19.01-.82.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21-.15.46-.55.38A8.013 8.013 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
    </svg>
  );

  return (
    <div className="flex min-h-screen font-body bg-white">
      {/* Left Column */}
      <div className="w-full lg:w-2/5 p-8 sm:p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-12">
            <Logo />
          </div>
          <h1 className="text-4xl font-bold text-deep-charcoal font-display mb-3">
            {activeTab === 'sign-in' ? 'Welcome Back' : 'Create an Account'}
          </h1>
          <p className="text-slate-gray mb-8">
            {activeTab === 'sign-in'
              ? 'Sign in to continue to your dashboard.'
              : 'Start your journey with AmplifyAI today.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <Button
              variant="outline"
              className="w-full justify-center gap-3 py-6"
              onClick={() => handleSocialSignIn('google')}
            >
              <GoogleIcon />
              <span className="text-base">Google</span>
            </Button>
            <Button
              variant="outline"
              className="w-full justify-center gap-3 py-6"
              onClick={() => handleSocialSignIn('github')}
            >
              <GitHubIcon />
              <span className="text-base">GitHub</span>
            </Button>
          </div>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-gray/20" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-gray">
                Or continue with
              </span>
            </div>
          </div>

          <Tabs
            defaultValue="sign-in"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="sign-in">Sign In</TabsTrigger>
              <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
            </TabsList>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <TabsContent value="sign-in" className="m-0">
                  <form
                    onSubmit={signInForm.handleSubmit(handleSignIn)}
                    className="space-y-6"
                  >
                    <FloatingLabelInput
                      name="email"
                      label="Email Address"
                      form={signInForm}
                      icon={<Mail size={20} />}
                    />
                    <FloatingLabelInput
                      name="password"
                      label="Password"
                      type={showPassword ? 'text' : 'password'}
                      form={signInForm}
                      icon={<Lock size={20} />}
                    />
                    <Button
                      type="submit"
                      className="w-full text-base py-7 bg-gradient-to-r from-electric-purple to-vibrant-magenta hover:shadow-lg hover:shadow-electric-purple/30"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Signing In...' : 'Sign In'}
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent value="sign-up" className="m-0">
                  <form
                    onSubmit={signUpForm.handleSubmit(handleSignUp)}
                    className="space-y-6"
                  >
                    <FloatingLabelInput
                      name="email"
                      label="Email Address"
                      form={signUpForm}
                      icon={<Mail size={20} />}
                    />
                    <FloatingLabelInput
                      name="password"
                      label="Password"
                      type={showPassword ? 'text' : 'password'}
                      form={signUpForm}
                      icon={<Lock size={20} />}
                    />
                    <Button
                      type="submit"
                      className="w-full text-base py-7 bg-gradient-to-r from-electric-purple to-vibrant-magenta hover:shadow-lg hover:shadow-electric-purple/30"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Creating Account...' : 'Create Account'}
                    </Button>
                  </form>
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </div>
      </div>

      {/* Right Column */}
      <div className="hidden lg:flex w-3/5 relative items-center justify-center p-12 bg-gray-900 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-electric-purple/80 to-amplify-coral/80" />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{
            backgroundImage:
              'linear-gradient(135deg, hsl(var(--slate-gray)) 0%, hsl(var(--electric-purple)) 50%, hsl(var(--amplify-coral)) 100%)',
            backgroundSize: '400% 400%',
          }}
        />

        {/* Animated Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-vibrant-magenta/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-sky-blue/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 0.8, 1],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 5,
          }}
        />

        {/* Glassmorphism Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
          className="relative w-full max-w-2xl h-[550px] bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <Button
              variant="ghost"
              className="text-white/70 hover:text-white hover:bg-white/10"
            >
              <PlayCircle size={16} className="mr-2" />
              Watch demo
            </Button>
          </div>

          <div className="flex-1 bg-black/20 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric-purple to-vibrant-magenta flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <h3 className="font-bold text-white text-lg font-display">
                AI Content Generator
              </h3>
            </div>

            <div className="bg-white/10 rounded-lg p-4 mb-4">
              <p className="text-white/80 text-sm">
                Generate a blog post about the future of AI in marketing...
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-white text-center text-xs mb-6">
              {[
                { icon: BarChart, label: 'Analytics' },
                { icon: MessageSquare, label: 'Social Post' },
                { icon: Users, label: 'Email' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="p-3 bg-white/5 rounded-lg border border-white/10"
                >
                  <item.icon className="mx-auto mb-1" size={20} />
                  {item.label}
                </motion.div>
              ))}
            </div>

            <div className="text-white">
              <h4 className="font-semibold text-sm mb-2">
                Performance Metrics
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/70 text-sm">Engagement</span>
                  <div className="w-1/2 bg-white/10 rounded-full h-2">
                    <motion.div
                      className="bg-lime-green h-2 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: '82%' }}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/70 text-sm">Click-Through</span>
                  <div className="w-1/2 bg-white/10 rounded-full h-2">
                    <motion.div
                      className="bg-sky-blue h-2 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: '65%' }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
