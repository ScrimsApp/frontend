import * as Yup from 'yup';

export const signUpSchema = Yup.object().shape({
  name: Yup.string().required().min(3),
  email: Yup.string().required().email(),
  password: Yup.string().required().min(6),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'passwords must match')
    .required(),
});
