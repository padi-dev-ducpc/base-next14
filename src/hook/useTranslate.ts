'use client';

import { Language } from '@/recoil/globalState';
import { useRecoilValue } from 'recoil';

const useTranslate = () => {
  const language = useRecoilValue(Language);

  return language;
};

export default useTranslate;
