export interface User {
  accessToken: string;
  user: {
    email: string;
    id: number;
    name: string;
    surname: string
  };
}
