import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});
