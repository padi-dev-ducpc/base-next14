'use client';

import InputForm from '@/components/input/InputForm';

export interface IStep2Props {}

export default function Step2({}: IStep2Props) {

  return (
    <>
      <div className='mx-auto'>
        <h2 className='text-4xl max-[700px]:text-3xl font-bold'>This is Step 2</h2>
        <InputForm
            type={'text'}
          />
      </div>
    </>
  );
}
