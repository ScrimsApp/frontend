import * as Yup from 'yup';

export const createMatchSchema = Yup.object().shape({
  type: Yup.string().required(),
  date: Yup.string().matches(
    /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/
  ), // 21/04/24
  time: Yup.string().matches(/^([0-9][0-9]|2[01])[\:]([0-9][0-9]|2[01])$/), // 08:00
});
