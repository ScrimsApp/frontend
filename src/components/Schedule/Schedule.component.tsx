import { FunctionComponent, useContext } from 'react';

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

import { GlobalContext } from '../../context/GlobalContext.';

const Schedule: FunctionComponent<ScheduleProps> = ({
  visible,
  matchesSchedule,
}) => {
  const { userContext, notificationContext } = useContext(GlobalContext);
  const { setNotificationStatus, setNewNotification } = notificationContext;
  const { user } = userContext;

  const handleSchedule = async (id: number) => {
    if (user.token) {
      console.log(id);
    }
  };

  return (
    <ScheduleWrapper visible={visible}>
      {matchesSchedule.map((schedule) => (
        <ScheduleCardWrapper>
          <ScheduleCardImage
            src={`http://localhost:8000/storage/${schedule.team_2.image}`}
            alt={schedule.team_2.name}
          />

          <ScheduleInfo>
            <ScheduleName>{schedule.team_2.name}</ScheduleName>

            <ScheduleDescription>{schedule.format}</ScheduleDescription>

            <ScheduleDescription>
              {schedule.data} {schedule.time}
            </ScheduleDescription>
          </ScheduleInfo>

          {user.captain ? (
            <ScheduleSideOption
              backgroundColor="#ED5353"
              onClick={() => handleSchedule(schedule.id)}
            >
              <CancelButton>Cancel</CancelButton>
            </ScheduleSideOption>
          ) : null}
        </ScheduleCardWrapper>
      ))}
    </ScheduleWrapper>
  );
};

export default Schedule;
