'use client';

import InputForm from '@/components/input/InputForm';
import { signInSteps } from '@/constants/signInSteps';
import useYupSchema from '@/hook/useYupSchema';
import { SignInData, SignInState } from '@/recoil/globalState';
import { FirstSignInFormType } from '@/types/formType';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';

export interface IStep1Props {}

export default function LoginStep1({}: IStep1Props) {
  const setSignInData = useSetRecoilState(SignInData);

  const setSignInStep = useSetRecoilState(SignInState);

  const { FirstSignInSchema } = useYupSchema();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FirstSignInFormType>({ resolver: FirstSignInSchema });

  const onSubmit: SubmitHandler<FirstSignInFormType> = (data) => {
    setSignInData({ ...data});
    setSignInStep(signInSteps.step2);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col space-y-2 w-[500px] max-[700px]:w-[350px] max-[390px]:w-[300px]'
      >
        <InputForm
          label='Email'
          type={'text'}
          register_conditions={{
            ...register('email'),
          }}
          errors={errors.email}
        />
        <InputForm
          label='Password'
          type={'password'}
          register_conditions={{
            ...register('password'),
          }}
          errors={errors.password}
        />
        <Link href='/forgot-password' className='text-[#457AE6] underline font-medium'>
          Forgot Password?
        </Link>
        <div className='pt-6 flex justify-around max-[700px]:flex-col-reverse items-center'>
          <Link href='/' className='button w-44 py-2.5 max-[700px]:mt-8'>
            <span>Back</span>
          </Link>
          <button type='submit' className='button w-44 py-2.5'>
            <span>Login</span>
          </button>
        </div>
      </form>
    </>
  );
}
