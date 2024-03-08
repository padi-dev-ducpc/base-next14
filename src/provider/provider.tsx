'use client';

import { RecoilRoot } from 'recoil';

export interface IRootProviderProps {
  children: React.ReactNode;
  locale?: string;
  messages?: any;
}
export default function RootProvider({ children, messages }: IRootProviderProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
