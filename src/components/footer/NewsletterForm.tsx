'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2, Check } from 'lucide-react';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
});

export default function NewsletterForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: '' },
  });

  async function onSubmit(data: z.infer<typeof schema>) {
    setStatus('submitting');
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
    console.log('Newsletter signup:', data.email);
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
  }

  return (
    <div>
      <p className="font-semibold text-white mb-4">Stay Updated</p>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          {...form.register('email')}
          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 flex-1"
          disabled={status !== 'idle'}
        />
        <Button
          type="submit"
          size="icon"
          className="bg-electric-purple hover:bg-electric-purple/90"
          disabled={status !== 'idle'}
        >
          {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" />}
          {status === 'success' && <Check className="h-4 w-4" />}
          {status === 'idle' && <ArrowRight className="h-4 w-4" />}
        </Button>
      </form>
      {form.formState.errors.email && (
        <p className="text-red-500 text-xs mt-2">{form.formState.errors.email.message}</p>
      )}
    </div>
  );
}
