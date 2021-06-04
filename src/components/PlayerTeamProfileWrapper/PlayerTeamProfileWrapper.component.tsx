import { FunctionComponent, useContext, useState } from 'react';
import { useFormik } from 'formik';

import { PlayerTeamProfileWrapperProps } from './types';

import {
  Button,
  ButtonOverlay,
  ButtonWrapper,
} from '../../styles/shared/Button/Button.styles';
import SignInput from '../SignInput/SignInput.component';

import UploadIcon from '../../assets/icons/upload-icon.svg';

import { GlobalContext } from '../../context/GlobalContext.';
import { api } from '../../config/api';

import {
  TeamWrapper,
  TeamImage,
  TeamForm,
  TeamIconWrapper,
  TeamFileInput,
} from './playerTeamProfileWrapper.styles';

const PlayerTeamProfileWrapper: FunctionComponent<PlayerTeamProfileWrapperProps> =
  ({ isCaptain, initialTeam }) => {
    const { userContext, notificationContext } = useContext(GlobalContext);
    const { user } = userContext;
    const { setNewNotification, setNotificationStatus } = notificationContext;
    const [displayImage, setDisplayImage] = useState(
      `http://localhost:8000/storage/${initialTeam.image}`
    );

    const formik = useFormik({
      initialValues: {
        image: initialTeam.image,
        name: initialTeam.name,
        description: initialTeam.description,
        tag: initialTeam.tag,
      },
      onSubmit: (values) => handleUpdateTeam(values),
      enableReinitialize: true,
      validateOnChange: false,
    });

    const handleUpdateTeam = async (values: any) => {
      if (user.token) {
        const formData = new FormData();

        formData.append('name', values.name);
        formData.append('description', values.description);
        formData.append('tag', values.tag);
        formData.append('image', values.image);

        if (typeof values.image !== 'string') {
          formData.append('image', values.image);
        }

        const response = await api.post('team/update', formData, {
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
      <TeamWrapper>
        <TeamImage src={displayImage} alt={formik.values.name} />

        {isCaptain ? (
          <TeamIconWrapper>
            <TeamFileInput
              type="file"
              name="image"
              onChange={(event) => {
                formik.setFieldValue('image', event.currentTarget.files[0]);
                setDisplayImage(
                  URL.createObjectURL(event.currentTarget.files[0])
                );
              }}
              disabled={!isCaptain}
            />
            <UploadIcon />
          </TeamIconWrapper>
        ) : null}

        <TeamForm onSubmit={formik.handleSubmit}>
          <SignInput
            name="name"
            minWidth="100%"
            colorType="primary"
            label="Name"
            type="text"
            margin={['0px', '0px', '36px', '0px']}
            value={formik.values.name}
            onChange={formik.handleChange}
            initialValue={'team'}
            disabled={!isCaptain}
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
            initialValue={'team'}
            disabled={!isCaptain}
          />

          <SignInput
            name="tag"
            minWidth="100%"
            colorType="primary"
            label="Tag"
            type="text"
            margin={['0px', '0px', '36px', '0px']}
            value={formik.values.tag}
            onChange={formik.handleChange}
            initialValue={'team'}
            disabled={!isCaptain}
          />

          {isCaptain ? (
            <ButtonWrapper
              minWidth="100%"
              margin={['0px', '0px', '36px', '0px']}
            >
              <ButtonOverlay className="overlay" type="secondary" />
              <Button type="submit">Update</Button>
            </ButtonWrapper>
          ) : null}
        </TeamForm>
      </TeamWrapper>
    );
  };

export default PlayerTeamProfileWrapper;
