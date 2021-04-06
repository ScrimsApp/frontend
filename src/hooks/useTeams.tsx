import useSWR from 'swr';

import { api } from '../config/api';
import { TeamResponse } from '../types/responses/team/TeamResponse.type';

const useTeams = (id?: number) => {
  const fetcher = (url: string) =>
    api.get<TeamResponse>(url).then((res) => res.data);

  const { data, error } = useSWR<TeamResponse>(`team/${id}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};

export default useTeams;
