'use client';

import { createContext, useContext, ReactNode, useMemo } from 'react';
import { initializeFirebase } from './index';
import { Auth } from 'firebase/auth';
import { FirebaseApp } from 'firebase/app';
import { Firestore } from 'firebase/firestore';

interface FirebaseContextType {
  firebaseApp: FirebaseApp | null;
  auth: Auth | null;
  firestore: Firestore | null;
}

const FirebaseContext = createContext<FirebaseContextType | undefined>(undefined);

export function FirebaseProvider({ children }: { children: ReactNode }) {
  const { firebaseApp, auth, firestore } = useMemo(() => initializeFirebase(), []);

  return (
    <FirebaseContext.Provider value={{ firebaseApp, auth, firestore }}>
      {children}
    </FirebaseContext.Provider>
  );
}

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};

export const useFirebaseApp = () => useFirebase()?.firebaseApp;
export const useAuth = () => useFirebase()?.auth;
export const useFirestore = () => useFirebase()?.firestore;
