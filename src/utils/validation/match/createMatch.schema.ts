import * as Yup from 'yup';

export const createMatchSchema = Yup.object().shape({
  type: Yup.string().required(),
  date: Yup.string()
    .matches(/^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/, {
      message: 'Date format should be as: 04/25',
    })
    .required(), // 04/25
  time: Yup.string()
    .matches(/^([0-9]|[0-2][0-4])[\:]([0-5][0-9])$/, {
      message: 'Time format should be as: 9:00',
    })
    .required(), // 08:00
});
