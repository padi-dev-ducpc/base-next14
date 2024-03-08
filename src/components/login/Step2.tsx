'use client';

import InputForm from '@/components/input/InputForm';
import useYupSchema from '@/hook/useYupSchema';
import { ResetSignInRecoils, SignInData } from '@/recoil/globalState';
import { FinalSignInFormType } from '@/types/formType';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRecoilValue, useResetRecoilState } from 'recoil';

export interface IStep2Props {}

export default function LoginStep2({}: IStep2Props) {
  const signInData = useRecoilValue(SignInData);

  const resetSignInRecoils = useResetRecoilState(ResetSignInRecoils);

  const { FinalSignInSchema } = useYupSchema();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FinalSignInFormType>({ resolver: FinalSignInSchema });

  const onSubmit: SubmitHandler<FinalSignInFormType> = (data) => {
    console.log({
      ...signInData,
      ...data,
    });
    resetSignInRecoils();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col space-y-2 w-[500px] max-[700px]:w-[350px] max-[390px]:w-[300px]'
      >
        <InputForm
          label='Phone number'
          type={'text'}
          register_conditions={{
            ...register('phoneNumber'),
          }}
          errors={errors.phoneNumber}
        />
        <InputForm
          label='Verification code'
          type={'text'}
          register_conditions={{
            ...register('verificationCode'),
          }}
          errors={errors.verificationCode}
        />
        <div className='pt-6 flex justify-around max-[700px]:flex-col-reverse items-center'>
          <button type='submit' className='button w-44 py-2.5'>
            <span>Login</span>
          </button>
        </div>
      </form>
    </>
  );
}
