'use client';

import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Locale } from '@/recoil/globalState';
import { StorageKeys } from '@/constants/enum';
import { getLocalStorageValue, setLocalStorage } from '@/utils/localStorageHandle';

const useMultiLanguage = () => {
  const [locale, setLocale] = useRecoilState(Locale);

  useEffect(() => {
    const localeValue = getLocalStorageValue(StorageKeys.LOCAL);

    if (localeValue) {
      setLocale(localeValue);
      return;
    }

    setLocalStorage(StorageKeys.LOCAL, locale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeLocale = useCallback(
    (locale: 'en' | 'ja') => {
      setLocale(locale);
      setLocalStorage(StorageKeys.LOCAL, locale);
    },
    [setLocale],
  );

  return { locale, changeLocale };
};

export default useMultiLanguage;
