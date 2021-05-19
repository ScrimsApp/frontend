import { FunctionComponent } from 'react';

import { PlayerProfileWrapperProps } from './types';

import {
  Button,
  ButtonOverlay,
  ButtonWrapper,
} from '../../styles/shared/Button/Button.styles';
import SignInput from '../SignInput/SignInput.component';

import { PlayerWrapper, Image, Form } from './playerProfileWrapper.styles';
import { useFormik } from 'formik';

const PlayerProfileWrapper: FunctionComponent<PlayerProfileWrapperProps> = ({
  initialPlayer,
}) => {
  const formik = useFormik({
    initialValues: {
      image: initialPlayer.image,
      name: initialPlayer.name,
      email: initialPlayer.email,
    },
    onSubmit: (values) => console.log(values),
    enableReinitialize: true,
    validateOnChange: false,
  });

  const handleUpdatePlayer = async () => {
    // Handle Player Update
  };

  return (
    <PlayerWrapper>
      <Image
        src={`https://avatars.dicebear.com/api/micah/${formik.values.image}`}
        alt={formik.values.name}
      />

      <Form onSubmit={formik.handleSubmit}>
        <SignInput
          name="name"
          minWidth="100%"
          colorType="primary"
          label="Name"
          type="text"
          margin={['0px', '0px', '36px', '0px']}
          value={formik.values.name}
          onChange={formik.handleChange}
          initialValue={'player'}
        />

        <SignInput
          name="email"
          minWidth="100%"
          colorType="primary"
          label="E-mail"
          type="email"
          margin={['0px', '0px', '36px', '0px']}
          value={formik.values.email}
          onChange={formik.handleChange}
          initialValue={'player'}
        />

        <ButtonWrapper minWidth="100%" margin={['0px', '0px', '36px', '0px']}>
          <ButtonOverlay className="overlay" type="secondary" />
          <Button type="submit">Update</Button>
        </ButtonWrapper>
      </Form>
    </PlayerWrapper>
  );
};

export default PlayerProfileWrapper;
