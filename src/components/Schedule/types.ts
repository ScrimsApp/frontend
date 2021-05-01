import { MatchesScheduled } from '../../types/responses/team/TeamResponse.type';

export interface ScheduleProps {
  visible: boolean;
  matchesSchedule: Array<MatchesScheduled>;
}
