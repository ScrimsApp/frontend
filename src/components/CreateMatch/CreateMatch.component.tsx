import { FunctionComponent, useState } from 'react';

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

const CreateMatch: FunctionComponent<CreateMatchProps> = () => {
  const [formActive, setFormActive] = useState(false);
  return (
    <CreateMatchWrapper>
      <CreateMatchTitle>Schedule a new match</CreateMatchTitle>

      <CreateMatchFormWrapper>
        <CreateMatchForm active={formActive}>
          <SignInput
            name="type"
            minWidth="100%"
            colorType="primary"
            label="Type"
            type="text"
            margin={['0px', '0px', '36px', '0px']}
            onChange={() => {}}
            value=""
          />

          <SignInput
            name="date"
            minWidth="100%"
            colorType="primary"
            label="Date"
            type="text"
            margin={['0px', '0px', '36px', '0px']}
            onChange={() => {}}
            value=""
          />

          <SignInput
            name="time"
            minWidth="100%"
            colorType="primary"
            label="Time"
            type="text"
            margin={['0px', '0px', '0px', '0px']}
            onChange={() => {}}
            value=""
          />
        </CreateMatchForm>

        <ButtonWrapper minWidth="100%" margin={['0px', '0px', '0px', '0px']}>
          <ButtonOverlay className="overlay" type="primary" sign />
          <Button
            type={formActive ? 'submit' : 'button'}
            onClick={() => setFormActive(true)}
          >
            Create match
          </Button>
        </ButtonWrapper>
      </CreateMatchFormWrapper>
    </CreateMatchWrapper>
  );
};

export default CreateMatch;
