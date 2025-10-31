'use client';

import { useAuth, useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/landing/Logo';

export default function DashboardPage() {
  const auth = useAuth();
  const { user, loading, error } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [user, loading, router]);

  const handleSignOut = async () => {
    if (auth) {
      await auth.signOut();
      router.push('/');
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (!user) {
    return null; // or a loading spinner, this will be handled by the redirect
  }

  return (
    <div className="min-h-screen bg-light-slate">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-4">
             {user.photoURL && (
              <img src={user.photoURL} alt="User Avatar" className="h-10 w-10 rounded-full" />
            )}
            <p className="text-sm font-medium text-deep-charcoal hidden sm:block">{user.displayName || user.email}</p>
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold font-display text-deep-charcoal mb-8">
          Welcome to your Dashboard, {user.displayName || 'Marketer'}!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dashboard content would go here */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold font-display text-deep-charcoal mb-4">Your Campaigns</h2>
            <p className="text-slate-gray">Campaign data will be displayed here.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold font-display text-deep-charcoal mb-4">Performance Metrics</h2>
            <p className="text-slate-gray">Performance charts will be displayed here.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold font-display text-deep-charcoal mb-4">Content Studio</h2>
            <p className="text-slate-gray">Quick links to the content studio.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
