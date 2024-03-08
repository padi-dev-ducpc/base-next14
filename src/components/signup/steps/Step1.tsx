'use client';

import InputForm from '@/components/input/InputForm';

export interface IStep1Props {}

export default function Step1({}: IStep1Props) {

  return (
    <>
      <div className='mx-auto'>
        <h2 className='text-4xl max-[700px]:text-3xl font-bold'>This is Step 1</h2>
        <InputForm
            type={'text'}
          />
      </div>
    </>
  );
}
