'use client';

import LayoutLanding from '@/layout/LayoutLanding';
import Image from 'next/image';
import Link from 'next/link';
import logoLanding from '@/assets/images/Logo_landing.png';
// import routerConstant from '@/constants/routerConstant';
import useTranslate from '@/hook/useTranslate';

export default function LandingView() {
//   const trans = useTranslate();
  return (
    <LayoutLanding>
      <div className='items-center pt-10 flex flex-col space-y-6'>
        <form className="w-4/6">
          <select id="countries" className="border border-gray-300 text-gray-900 w-full p-2" defaultValue={'Choose a country'}>
            <option>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </form>
        <Link href='/signup' className='button w-11/12'>
          <span>Sign up</span>
        </Link>
        <Link href='/login' className='button w-11/12'>
          <span>Login</span>
        </Link>
      </div>
    </LayoutLanding>
  );
}
