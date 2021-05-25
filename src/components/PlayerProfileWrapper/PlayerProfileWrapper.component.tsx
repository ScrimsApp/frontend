import { FunctionComponent, useContext, useState } from 'react';
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
import { GlobalContext } from '../../context/GlobalContext.';
import { api } from '../../config/api';

const PlayerProfileWrapper: FunctionComponent<PlayerProfileWrapperProps> = ({
  initialPlayer,
}) => {
  const { userContext, notificationContext } = useContext(GlobalContext);
  const { user } = userContext;
  const { setNewNotification, setNotificationStatus } = notificationContext;
  const [displayImage, setDisplayImage] = useState(initialPlayer.image);

  const formik = useFormik({
    initialValues: {
      image: initialPlayer.image,
      name: initialPlayer.name,
      email: initialPlayer.email,
      description: initialPlayer.description,
    },
    onSubmit: (values) => handleUpdatePlayer(values),
    enableReinitialize: true,
    validateOnChange: false,
  });

  const handleUpdatePlayer = async (values: any) => {
    if (user.token) {
      const formData = new FormData();

      formData.append('name', values.name);
      formData.append('description', values.description);
      formData.append('email', values.email);
      formData.append('image', values.image);

      const response = await api.post('player/update', formData, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const { data, status } = response;

      setNotificationStatus(true);
      setNewNotification({
        type: status === 200 ? 'success' : 'error',
        title: status === 200 ? 'Success' : 'Whoops',
        message: data.message,
      });
    }
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

        <SignInput
          name="description"
          minWidth="100%"
          colorType="primary"
          label="Description"
          type="text"
          margin={['0px', '0px', '36px', '0px']}
          value={formik.values.description}
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
