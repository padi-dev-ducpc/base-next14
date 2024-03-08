'use client';

import InputForm from '@/components/input/InputForm';
import Link from 'next/link';

export interface IForgotPasswordProps {}

export default function ForgotPasswordView(props: IForgotPasswordProps) {
  return (
    <>
      <div className='mx-auto mb-8'>
        <h2 className='text-4xl max-[700px]:text-3xl max-[390px]:text-2xl font-bold'>
          Forgot Password
        </h2>
      </div>
      <div className='m-auto'>
        <form className='flex flex-col space-y-8 w-[500px] max-[700px]:w-[350px] max-[390px]:w-[300px]'>
          <InputForm
            label={'Email'}
            type={'text'}
          />
          <div className='pt-24 flex justify-around max-[700px]:flex-col-reverse max-[700px]:pt-2 items-center'>
            <Link href='/login' className='button w-44 py-2.5 max-[700px]:mt-8'>
              <span>Back</span>
            </Link>
            <button type='submit' className='button w-44 py-2.5'>
              <span>Send</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
