import { signInSteps } from '@/constants/signInSteps';
import { signUpSteps } from '@/constants/signUpSteps';
import { RecoilState, atom, selector } from 'recoil';
// import en from '../locale/en';
// import ja from '../locale/ja';

const Locale = atom<'en' | 'ja'>({
  key: 'locale',
  default: 'en',
});

const Language = selector({
  key: 'language',
  get: ({ get }) => {
    const locale = get(Locale);

    if (locale === 'ja') return 'ja';

    return 'en';
  },
});

const SignUpState = atom({
  key: 'signup-state',
  default: signUpSteps.step1
});

const SignInState = atom({
  key: 'signin-state',
  default: signInSteps.step1
});

const SignInData = atom({
  key: 'signin-data',
  default: {
    email: '',
    password: ''
  }
});

const resetSignInRecoil: Array<RecoilState<any>> = [
  SignInState,
  SignInData,
];

const ResetSignInRecoils = selector({
  key: 'reset-sign-in-recoils',
  get: () => ({ resetSignInRecoil }),
  set: ({ reset }) => {
    resetSignInRecoil.forEach((item) => reset(item));
  },
});

export {
  Locale,
  Language,
  SignUpState,
  SignInState,
  SignInData,
  ResetSignInRecoils
};
