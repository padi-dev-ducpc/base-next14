'use client';

import { signupSteps } from '@/constants/signUpSteps';
import { SignupState } from '@/recoil/globalState';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';

export interface ISignupProgressProps {}

export default function SignupProgress({}: ISignupProgressProps) {
  const signupStep = useRecoilValue(SignupState);
  const allSteps = useMemo(() => {
    return [
      signupSteps.step1,
      signupSteps.step2,
      signupSteps.step3,
      signupSteps.step4,
      signupSteps.step5,
    ];
  }, []);

  return (
    <>
      <div className='flex justify-around items-center'>
        {allSteps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center ${
              index + 1 === signupStep.stepNum ? 'text-[#A5FECB]' : 'text-[#D1D5DB]'
            }`}
          >
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                index + 1 === signupStep.stepNum ? 'bg-[#A5FECB]' : 'bg-[#D1D5DB]'
              }`}
            >
              {index + 1}
            </span>
            <span
              className={`ml-2 ${
                index + 1 === signupStep.stepNum ? 'text-[#A5FECB]' : 'text-[#D1D5DB]'
              }`}
            >
              {step.stepName}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
