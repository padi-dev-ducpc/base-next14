import LayoutLanding from '@/layout/LayoutLanding';
import * as React from 'react';

export default function AuthenticationLayout({ children }: { children: React.ReactNode }) {
  return <LayoutLanding>{children}</LayoutLanding>;
}
