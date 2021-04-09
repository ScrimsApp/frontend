export interface User {
  name: string;
  id: number;
  token: string;
  teamId: number | null;
  captain: boolean;
}
