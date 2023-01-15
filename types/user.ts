import { UserProfile } from "@auth0/nextjs-auth0/client";

type User = {
  name: string;
  id: string;
  email: string;
  phone: string;
  locale: string;
};

type Auth0User = UserProfile | undefined;

export type { Auth0User, User };
