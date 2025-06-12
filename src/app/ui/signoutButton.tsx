'use client';

import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';           // Hook to get current session and authentication status
import { useState } from 'react';                       // Hook for managing local component state

export default function SignoutButton() {

  // Destructure session data and status from useSession
  const { data: session, status } = useSession();

  // Local state to manage whether the user is currently signing out
  const [isSigningOut, setIsSigningOut] = useState(false);

  // While session is loading, don't render anything
  if (status === 'loading') return null;

  // Only render if user is logged in
  if (!session) return null;

  const handleLogout = async () => {
    setIsSigningOut(true);
    await signOut();                  // Redirects by default
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isSigningOut}
      className={`ml-auto min-w-[120px] bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition disabled:opacity-60 disabled:cursor-not-allowed`}
    >
      {isSigningOut ? 'Signing Out...' : 'Sign Out'}
    </button>
  );
}