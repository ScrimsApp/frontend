import * as Yup from 'yup';

export const createTeamSchema = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string().required(),
  teamImage: Yup.mixed().required(),
});
