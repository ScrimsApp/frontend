import { FunctionComponent } from 'react';

import {
  ScheduleCardWrapper,
  ScheduleWrapper,
  ScheduleCardImage,
  ScheduleInfo,
  ScheduleName,
  ScheduleDescription,
  ScheduleSideOption,
  CancelButton,
} from './schedule.styles';

import { ScheduleProps } from './types';

const Schedule: FunctionComponent<ScheduleProps> = ({ visible }) => {
  const handleSchedule = () => {};

  return (
    <ScheduleWrapper visible={visible}>
      <ScheduleCardWrapper>
        <ScheduleCardImage
          src="https://pbs.twimg.com/profile_images/922916646108442624/sNPFiaj-_400x400.jpg"
          alt="G3 Sports"
        />

        <ScheduleInfo>
          <ScheduleName>G3 Sports</ScheduleName>

          <ScheduleDescription>Partidas em mapas diversos</ScheduleDescription>

          <ScheduleDescription>20.03.2021 7:00 PM</ScheduleDescription>
        </ScheduleInfo>

        <ScheduleSideOption backgroundColor="#ED5353">
          <CancelButton>Cancel</CancelButton>
        </ScheduleSideOption>
      </ScheduleCardWrapper>

      <ScheduleCardWrapper>
        <ScheduleCardImage
          src="https://pbs.twimg.com/profile_images/922916646108442624/sNPFiaj-_400x400.jpg"
          alt="G3 Sports"
        />

        <ScheduleInfo>
          <ScheduleName>G3 Sports</ScheduleName>

          <ScheduleDescription>Partidas em mapas diversos</ScheduleDescription>

          <ScheduleDescription>20.03.2021 7:00 PM</ScheduleDescription>
        </ScheduleInfo>

        <ScheduleSideOption backgroundColor="#ED5353">
          <CancelButton>Cancel</CancelButton>
        </ScheduleSideOption>
      </ScheduleCardWrapper>
    </ScheduleWrapper>
  );
};

export default Schedule;
