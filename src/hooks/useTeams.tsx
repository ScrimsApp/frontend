import useSWR from 'swr';

import { api } from '../config/api';
import { TeamResponse } from '../types/responses/team/TeamResponse.type';

interface UseTeamsResponse {
  data: TeamResponse;
  isLoading: boolean;
  error: any;
}

const useTeams = (id?: number): UseTeamsResponse => {
  const fetcher = (url: string) => api.get(url).then((res) => res.data);

  const { data, error } = useSWR<TeamResponse>(`team/${id || ''}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};

export default useTeams;
