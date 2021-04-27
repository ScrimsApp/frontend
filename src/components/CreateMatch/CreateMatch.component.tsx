import { FunctionComponent, useState, MouseEvent, useContext } from 'react';

import { CreateMatchProps } from './types';

import {
  CreateMatchWrapper,
  CreateMatchTitle,
  CreateMatchErrorLabel,
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
import { api } from '../../config/api';
import { GlobalContext } from '../../context/GlobalContext.';

const CreateMatch: FunctionComponent<CreateMatchProps> = () => {
  const { userContext, notificationContext } = useContext(GlobalContext);
  const { user } = userContext;
  const { setNewNotification, setNotificationStatus } = notificationContext;
  const [formActive, setFormActive] = useState(false);

  const formik = useFormik({
    initialValues: {
      type: '',
      date: '',
      time: '',
    },
    onSubmit: (values) => handleCreateMatch(values),
    validateOnChange: false,
    validationSchema: createMatchSchema,
  });

  const handleCreateMatch = async (values: any) => {
    // let date = new Date(`2021/${values.date} ${values.time}`);
    let response = await api.post(
      'match',
      {
        format: values.type,
        date: `2021/${values.date}`,
        time: values.time,
      },
      {
        headers: {
          Authorization: 'Bearer ' + user.token,
        },
      }
    );

    const { data, status } = response;

    if (data) {
      setNotificationStatus(true);
      setNewNotification({
        type: status === 200 ? 'success' : 'error',
        title: status === 200 ? 'Success' : 'Whoops',
        message: data.message,
      });

      setFormActive(false);
    }
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

      <CreateMatchErrorLabel>
        {Object.values(formik.errors).find((error) => error)}
      </CreateMatchErrorLabel>

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
          {!user.captain ? (
            <Button
              type={formActive ? 'submit' : 'button'}
              onClick={() => handleCreateMatchButton()}
            >
              Create match
            </Button>
          ) : (
            <Button type="button">Ask captain</Button>
          )}
        </ButtonWrapper>
      </CreateMatchFormWrapper>
    </CreateMatchWrapper>
  );
};

export default CreateMatch;
