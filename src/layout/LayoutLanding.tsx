'use client';

import * as React from 'react';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import Link from 'next/link';
export interface ILayoutLandingProps {
  children: React.ReactNode;
}

export default function LayoutLanding({ children }: ILayoutLandingProps) {

  return (
    <main>
      <div className='app min-h-screen flex items-center justify-center'>
        <section className='text-white flex flex-col'>
          <div className='mx-auto mb-12 pt-12 px-10'>
            <Link href=''>
              <Image src={logo} alt='Logo' priority />
            </Link>
          </div>
          {children}
        </section>
      </div>
    </main>
  );
}
