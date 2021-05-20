import { FunctionComponent, useState } from 'react';
import { useFormik } from 'formik';

import { PlayerProfileWrapperProps } from './types';

import {
  Button,
  ButtonOverlay,
  ButtonWrapper,
} from '../../styles/shared/Button/Button.styles';
import SignInput from '../SignInput/SignInput.component';

import {
  PlayerWrapper,
  Image,
  Form,
  IconWrapper,
  FileInput,
} from './playerProfileWrapper.styles';

import UploadIcon from '../../assets/icons/upload-icon.svg';

const PlayerProfileWrapper: FunctionComponent<PlayerProfileWrapperProps> = ({
  initialPlayer,
}) => {
  const [displayImage, setDisplayImage] = useState(initialPlayer.image);

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
      <Image src={displayImage} alt={formik.values.name} />

      <IconWrapper>
        <FileInput
          type="file"
          name="image"
          onChange={(event) => {
            formik.setFieldValue('image', event.currentTarget.files[0]);
            setDisplayImage(URL.createObjectURL(event.currentTarget.files[0]));
          }}
        />
        <UploadIcon />
      </IconWrapper>

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
