'use client';

import { SessionProvider } from 'next-auth/react';

export function Providers({ children }: { children: React.ReactNode }) {

  // SessionProvider allows the app to access the user's authentication session across components
  return <SessionProvider>{children}</SessionProvider>;
}