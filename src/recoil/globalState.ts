import { atom, selector } from 'recoil';
import en from '../locale/en';
import ja from '../locale/ja';

const Locale = atom<'en' | 'ja'>({
  key: 'locale',
  default: 'en',
});

const Language = selector({
  key: 'language',
  get: ({ get }) => {
    const locale = get(Locale);

    if (locale === 'ja') return ja;

    return en;
  },
});

export {
  Locale,
  Language
};
