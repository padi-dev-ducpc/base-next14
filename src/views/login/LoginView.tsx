'use client';

import InputForm from '@/components/input/InputForm';
import LoginStep1 from '@/components/login/Step1';
import LoginStep2 from '@/components/login/Step2';
import ModalBox from '@/components/modal/ModalBox';
import { signInSteps } from '@/constants/signInSteps';
import { SignInState } from '@/recoil/globalState';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';

export interface ILoginViewProps {}

export default function LoginView(props: ILoginViewProps) {
  const signInStep = useRecoilValue(SignInState);

  const renderAllSteps = useMemo(
    () => [
      {
        render: () => <LoginStep1 />,
        stepDetail: signInSteps.step1,
      },
      {
        render: () => <LoginStep2 />,
        stepDetail: signInSteps.step2,
      },
    ],
    [],
  );

  return (
    <>
      <div className='mx-auto mb-8'>
        <h2 className='text-4xl max-[700px]:text-3xl font-bold'>Login</h2>
      </div>
      <div className='m-auto'>
        {renderAllSteps.map((step) => {
          if (step.stepDetail.stepNum === signInStep.stepNum)
            return <div key={step.stepDetail.stepNum}>{step.render()}</div>;
        })}
        {/* <ModalBox isOpen={isOpenModal} onCloseModal={() => setOpenModal(false)}>
              <h2>Simple centered modal</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </p>
            </ModalBox> */}
      </div>
    </>
  );
}
