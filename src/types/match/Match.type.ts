export interface Match {
  id: number;
  date: string;
  format: string;
  invite_matches: Array<any>;
  status: number;
  team_1: {
    id: number;
    name: string;
    image: string;
    tag: string;
    description: any;
  };
  team_2?: {
    id: number;
    name: string;
    image: string;
    tag: string;
    description: any;
  };
  time: string;
}
