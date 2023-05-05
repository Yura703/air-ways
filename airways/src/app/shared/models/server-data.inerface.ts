export interface ServerDataInterface {
  accessToken: string;
  user: {
    firstName: string;
    lastName: string;
    email: string;
    id: number;
  };
}
