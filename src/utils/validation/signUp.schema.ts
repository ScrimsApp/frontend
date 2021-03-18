import * as Yup from 'yup';

export const signUpSchema = Yup.object().shape({
  nickname: Yup.string().required().min(3),
  email: Yup.string().required().email(),
  password: Yup.string().required().min(6),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'passwords must match')
    .required(),
});
