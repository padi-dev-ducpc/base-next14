export interface FirstSignInFormType {
    email: string;
    password: string;
};

export interface FinalSignInFormType {
    phoneNumber: string;
    verificationCode: string;
};

export interface SignUpFormType {
    inviteCode?: string;
    email: string;
    phoneNumber: string;
    password: string;
    passwordConfirm: string;
    username: string;
};
