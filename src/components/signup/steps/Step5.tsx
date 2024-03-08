'use client';

import InputForm from '@/components/input/InputForm';

export interface IStep5Props {}

export default function Step5({}: IStep5Props) {

  return (
    <>
      <div className='mx-auto'>
        <h2 className='text-4xl max-[700px]:text-3xl font-bold'>This is Step 5</h2>
        <InputForm
            type={'text'}
          />
      </div>
    </>
  );
}
