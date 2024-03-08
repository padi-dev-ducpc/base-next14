'use client';

import { useMemo } from 'react';
import { object, string, ObjectSchema } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import useTranslate from './useTranslate';
import { FinalSignInFormType, FirstSignInFormType } from '@/types/formType';
// import regexConstant from '@/constants/regexConstant';
// import { FormMarketerApply, ResetPasswordFormType, SignUpFormType } from '@/types/formInputType';

const useYupSchema = () => {
  const trans = useTranslate();

  // Base
  const emailSchema = useMemo(
    () =>
      string()
        .required('Email is required'),
        // .matches(regexConstant.email, 'Invalid email'),
    []
  );

  const passwordSchema = useMemo(
    () => string().required('Password is required'),
    []
  );

  const phoneNumberSchema = useMemo(
    () => string().required('Phone number is required'),
    []
  );

  const verificationCodeSchema = useMemo(
    () => string().required('Verification code is required'),
    []
  );

  const passwordConfirmSchema = useMemo(
    () => string().required('Password confirmation is required'),
    []
  );

  const userNameSchema = useMemo(
    () =>
      string()
        .required('Username is required'),
        // .matches(
        //   regexConstant.username,
        //   'Username must be....',
        // ),
    [],
  );

  const tokenSchema = useMemo(() => string(), []);

//   const addressSchema = useMemo(
//     () => string().matches(regexConstant.address, trans.validation.invalid('address')).required(),
//     [trans],
//   );

  // Pairing basic schemas
//   const UpdatePasswordSchema = useMemo(
//     () =>
//       object({
//         password: passwordSchema,
//         newPassword: passwordSchema
//           .min(8, trans.validation.min('password', 8))
//           .max(32, trans.validation.max('password', 32))
//           .matches(regexConstant.password, trans.validation.invalid('password')),
//         confirmNewPassword: passwordConfirmSchema.test(
//           'passwords-match',
//           trans.validation.password_confirmation_same,
//           function (value) {
//             return value === this.parent.newPassword;
//           },
//         ),
//       }),
//     [passwordSchema, trans, passwordConfirmSchema],
//   );

  const FirstSignInSchema = useMemo<ObjectSchema<FirstSignInFormType>>(
    () =>
      object({
        email: emailSchema,
        password: passwordSchema
      }),
    [emailSchema, passwordSchema],
  );

  const FinalSignInSchema = useMemo<ObjectSchema<FinalSignInFormType>>(
    () =>
      object({
        phoneNumber: phoneNumberSchema,
        verificationCode: verificationCodeSchema,
      }),
    [phoneNumberSchema, verificationCodeSchema],
  );

//   const SignUpSchema = useMemo<ObjectSchema<SignUpFormType>>(
//     () =>
//       object({
//         email: emailSchema,
//         username: userNameSchema,
//         password: passwordSchema
//           .min(8, trans.validation.min('password', 8))
//           .max(32, trans.validation.max('password', 32))
//           .matches(regexConstant.password, trans.validation.invalid('password')),
//         passwordConfirm: passwordConfirmSchema.test(
//           'passwords-match',
//           trans.validation.password_confirmation_same,
//           function (value) {
//             return value === this.parent.password;
//           },
//         ),
//         referralCode: string().test(
//           'referralCode',
//           trans.validation.invalid('referral code'),
//           (value) => value === undefined || value === '' || regexConstant.referralCode.test(value),
//         ),
//       }),
//     [emailSchema, userNameSchema, passwordSchema, trans, passwordConfirmSchema],
//   );

//   const ResetPasswordSchema = useMemo<ObjectSchema<ResetPasswordFormType>>(
//     () =>
//       object({
//         newPassword: passwordSchema
//           .min(8, trans.validation.min('password', 8))
//           .max(32, trans.validation.max('password', 32))
//           .matches(regexConstant.password, trans.validation.invalid('password')),
//         passwordConfirm: passwordConfirmSchema.test(
//           'passwords-match',
//           trans.validation.password_confirmation_same,
//           function (value) {
//             return value === this.parent.newPassword;
//           },
//         ),
//         token: tokenSchema.nullable(),
//       }),
//     [passwordConfirmSchema, passwordSchema, tokenSchema, trans],
//   );

  return {
    // UpdatePasswordSchema: yupResolver(UpdatePasswordSchema),
    FirstSignInSchema: yupResolver(FirstSignInSchema),
    FinalSignInSchema: yupResolver(FinalSignInSchema),
    // SignUpSchema: yupResolver(SignUpSchema),
    // ResetPasswordSchema: yupResolver(ResetPasswordSchema),
  };
};

export default useYupSchema;
