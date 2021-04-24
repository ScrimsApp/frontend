import { FunctionComponent, useState, MouseEvent } from 'react';

import { CreateMatchProps } from './types';

import {
  CreateMatchWrapper,
  CreateMatchTitle,
  CreateMatchForm,
  CreateMatchFormWrapper,
} from './createMatch.styles';

import {
  Button,
  ButtonOverlay,
  ButtonWrapper,
} from '../../styles/shared/Button/Button.styles';

import SignInput from '../SignInput/SignInput.component';
import { useFormik } from 'formik';
import { createMatchSchema } from '../../utils/validation/match/createMatch.schema';

const CreateMatch: FunctionComponent<CreateMatchProps> = () => {
  const [formActive, setFormActive] = useState(false);

  // "format" => $dados['format'],
  // "date" => $dados['date'],
  // "time" => $dados['time']

  const formik = useFormik({
    initialValues: {
      type: '',
      date: '',
      time: '',
    },
    onSubmit: (values) => handleCreateMatch(values),
    validateOnChange: false,
  });

  const handleCreateMatch = async (values: any) => {
    let date = new Date(values.date + ' ' + values.time);

    let isDateValid = await createMatchSchema.isValid({
      type: values.type,
      date: values.date,
      time: values.time,
    });

    console.log(isDateValid);
    console.log(date);
  };

  const handleCreateMatchButton = () => {
    if (formActive) {
      formik.submitForm();
    } else {
      setFormActive(true);
    }
  };

  return (
    <CreateMatchWrapper>
      <CreateMatchTitle>Schedule a new match</CreateMatchTitle>

      <CreateMatchFormWrapper>
        <CreateMatchForm onSubmit={formik.handleSubmit} active={formActive}>
          <SignInput
            name="type"
            minWidth="100%"
            colorType="primary"
            label="Type"
            type="text"
            margin={['0px', '0px', '36px', '0px']}
            onChange={formik.handleChange}
            value={formik.values.type}
          />

          <SignInput
            name="date"
            minWidth="100%"
            colorType="primary"
            label="Date"
            type="text"
            margin={['0px', '0px', '36px', '0px']}
            onChange={formik.handleChange}
            value={formik.values.date}
          />

          <SignInput
            name="time"
            minWidth="100%"
            colorType="primary"
            label="Time"
            type="text"
            margin={['0px', '0px', '0px', '0px']}
            onChange={formik.handleChange}
            value={formik.values.time}
          />
        </CreateMatchForm>

        <ButtonWrapper minWidth="100%" margin={['0px', '0px', '0px', '0px']}>
          <ButtonOverlay className="overlay" type="primary" sign />
          <Button
            type={formActive ? 'submit' : 'button'}
            onClick={() => handleCreateMatchButton()}
          >
            Create match
          </Button>
        </ButtonWrapper>
      </CreateMatchFormWrapper>
    </CreateMatchWrapper>
  );
};

export default CreateMatch;
