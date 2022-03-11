export type User = {
  id: string;
  email: string;
  firstname: string;
  goals: {
    step: number;
    smoke: number;
  };
  iat: number;
  exp: number;
};
