'use client';

import InputForm from '@/components/input/InputForm';

export interface IStep3Props {}

export default function Step3({}: IStep3Props) {

  return (
    <>
      <div className='mx-auto'>
        <h2 className='text-4xl max-[700px]:text-3xl font-bold'>This is Step 3</h2>
        <InputForm
            type={'text'}
          />
      </div>
    </>
  );
}
