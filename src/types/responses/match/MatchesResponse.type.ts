export interface MatchesResponse {
  id: number;
  team_1: {
    id: number;
    name: string;
    tag: string;
    description?: string;
    image: string;
    user_id: number;
    created_at: Date;
    updated_at: Date;
  };
  team_2?: any;
  status: number;
  format: string;
  date: string;
  time: string;
  created_at: Date;
  updated_at: Date;
}
