'use client';

import StatusAccordion from '@/components/accordion/StatusAccordion';
import SignupProgress from '@/components/signup/SignupProgress';
import Step1 from '@/components/signup/steps/Step1';
import Step2 from '@/components/signup/steps/Step2';
import Step3 from '@/components/signup/steps/Step3';
import Step4 from '@/components/signup/steps/Step4';
import Step5 from '@/components/signup/steps/Step5';
import { signUpSteps } from '@/constants/signUpSteps';
import { SignUpState } from '@/recoil/globalState';
import { useCallback, useMemo } from 'react';
import { useRecoilState } from 'recoil';

export interface ISignupViewProps {}

export default function SignupView(props: ISignupViewProps) {
  const [signUpStep, setSignUpStep] = useRecoilState(SignUpState);

  const renderAllSteps = useMemo(
    () => [
      {
        render: () => <Step1 />,
        stepDetail: signUpSteps.step1,
      },
      {
        render: () => <Step2 />,
        stepDetail: signUpSteps.step2,
      },
      {
        render: () => <Step3 />,
        stepDetail: signUpSteps.step3,
      },
      {
        render: () => <Step4 />,
        stepDetail: signUpSteps.step4,
      },
      {
        render: () => <Step5 />,
        stepDetail: signUpSteps.step5,
      },
    ],
    [],
  );

  const handleMovingStep = useCallback(
    (isForward: boolean) => {
      const currentStepNum = isForward ? signUpStep.stepNum + 1 : signUpStep.stepNum - 1;
      renderAllSteps.map((step) => {
        if (step.stepDetail.stepNum === currentStepNum) {
          setSignUpStep(step.stepDetail);
        }
      });
    },
    [renderAllSteps, setSignUpStep, signUpStep],
  );

  return (
    <>
      <div className='mx-auto mb-8'>
        <h2 className='text-4xl max-[700px]:text-3xl font-bold'>Signup</h2>
      </div>
      <div className='m-auto'>
        <form>
          <SignupProgress />
          {renderAllSteps.map((step) => {
            if (step.stepDetail.stepNum === signUpStep.stepNum) return step.render();
          })}
          <div className='pt-6 flex justify-around max-[700px]:flex-col-reverse items-center'>
            <button
              type='button'
              className='button w-44 py-2.5 max-[700px]:mt-8'
              onClick={() => handleMovingStep(false)}
            >
              <span>Back</span>
            </button>
            <button
              type='button'
              className='button w-44 py-2.5'
              onClick={() => handleMovingStep(true)}
            >
              <span>Next</span>
            </button>
          </div>
        </form>
      </div>
      <StatusAccordion />
    </>
  );
}
