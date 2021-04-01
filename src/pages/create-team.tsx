import { useRouter } from 'next/router';

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

const CreateTeam = () => {
  const router = useRouter();

  return (
    <CreateTeamWrapper>
      <CreateTeamGradientLayer />

      <CreateTeamForm>
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
          value=""
        />

        <SignInput
          name="description"
          minWidth="100%"
          colorType="primary"
          label="Description"
          type="text"
          margin={['0px', '0px', '36px', '0px']}
          value=""
        />

        <ButtonWrapper minWidth="100%" margin={['0px', '0px', '36px', '0px']}>
          <ButtonOverlay className="overlay" type="secondary" />
          <FileInput type="file" />
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
