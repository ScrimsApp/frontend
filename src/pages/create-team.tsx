import { useRouter } from 'next/router';
import { useFormik } from 'formik';

import {
  CreateTeamForm,
  CreateTeamGradientLayer,
  CreateTeamWrapper,
  BackArrow,
  CreateTeamTitle,
  CreateTeamDescription,
  FileInput,
} from '../styles/pages/createTeam/createTeam.styles';

import SignInput from '../components/SignInput/SignInput.component';

import {
  Button,
  ButtonOverlay,
  ButtonWrapper,
} from '../styles/shared/Button/Button.styles';

import { createTeamSchema } from '../utils/validation/team/createTeam.schema';
import { api } from '../config/api';
import { User } from '../types/user/User.type';
import { CreateTeamResponse } from '../types/responses/team/CreateTeamResponse.type';

const CreateTeam = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      teamImage: null,
    },
    onSubmit: (values) => handleCreateTeam(values),
    validateOnChange: false,
    validationSchema: createTeamSchema,
  });

  const handleCreateTeam = async (values: any) => {
    const userInfo: User = JSON.parse(window.localStorage.getItem('user'));

    let formData = new FormData();
    formData.append('name', values.name);
    formData.append('tag', values.description);
    formData.append('image', values.teamImage);

    const response = await api.post<CreateTeamResponse>('team', formData, {
      headers: {
        Authorization: 'Bearer ' + userInfo.token,
      },
    });

    const { data, status } = response;

    console.log(data);

    status === 201
      ? router.push('/team')
      : console.log('Something went wrong!');
  };

  return (
    <CreateTeamWrapper>
      <CreateTeamGradientLayer />

      <CreateTeamForm onSubmit={formik.handleSubmit}>
        <BackArrow onClick={() => router.back()}>&#8592;</BackArrow>
        <CreateTeamTitle>Create your team</CreateTeamTitle>

        <CreateTeamDescription>
          Fill in with the essential information of your team
        </CreateTeamDescription>

        <SignInput
          name="name"
          minWidth="100%"
          colorType="primary"
          label="Team name"
          type="text"
          margin={['0px', '0px', '36px', '0px']}
          value={formik.values.name}
          onChange={formik.handleChange}
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
        />

        <ButtonWrapper minWidth="100%" margin={['0px', '0px', '36px', '0px']}>
          <ButtonOverlay
            sign={formik.values.teamImage != null ? true : false}
            className="overlay"
            type="secondary"
          />
          <FileInput
            type="file"
            onChange={(event) =>
              formik.setFieldValue('teamImage', event.currentTarget.files[0])
            }
            name="teamImage"
          />
          <Button type="button">Upload Team Banner</Button>
        </ButtonWrapper>

        <ButtonWrapper minWidth="100%" margin={['0px', '0px', '36px', '0px']}>
          <ButtonOverlay className="overlay" type="primary" sign />
          <Button type="submit">Create Team</Button>
        </ButtonWrapper>
      </CreateTeamForm>
    </CreateTeamWrapper>
  );
};

export default CreateTeam;
