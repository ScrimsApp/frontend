import { FunctionComponent, useContext } from 'react';
import { mutate } from 'swr';

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
import { api } from '../../config/api';
import { DeleteMatchResponse } from '../../types/responses/match/DeleteMatchResponse.type';
import { parseDate } from '../../utils/functions/parseDate';

const Schedule: FunctionComponent<ScheduleProps> = ({
  visible,
  matchesSchedule,
}) => {
  const { userContext, notificationContext } = useContext(GlobalContext);
  const { setNotificationStatus, setNewNotification } = notificationContext;
  const { user } = userContext;

  const handleSchedule = async (id: number) => {
    if (user.token) {
      const response = await api.post<DeleteMatchResponse>(
        'match/delete',
        {
          match_id: id,
        },
        {
          headers: {
            Authorization: 'Bearer' + user.token,
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
      }

      status === 200 ? mutate('team') : null;
    }
  };

  return (
    <ScheduleWrapper visible={visible}>
      {matchesSchedule?.map((schedule) => (
        <ScheduleCardWrapper key={schedule.id}>
          <ScheduleCardImage
            src={`https://scrimsapp.tech/storage/${schedule.team_adversary_image}`}
            alt={schedule.team_adversary_name}
          />

          <ScheduleInfo>
            <ScheduleName>{schedule.team_adversary_name}</ScheduleName>

            <ScheduleDescription>{schedule.format}</ScheduleDescription>

            <ScheduleDescription>
              {parseDate(schedule.date)} {schedule.time}
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
