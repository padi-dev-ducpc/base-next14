'use client';

import InputForm from '@/components/input/InputForm';

export interface IStep4Props {}

export default function Step4({}: IStep4Props) {

  return (
    <>
      <div className='mx-auto'>
        <h2 className='text-4xl max-[700px]:text-3xl font-bold'>This is Step 4</h2>
        <InputForm
            type={'text'}
          />
      </div>
    </>
  );
}
