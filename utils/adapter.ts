import { UserProfile } from "@auth0/nextjs-auth0/client";
import type { User, Auth0User } from "../types/user";

const adaptUser = (user: Auth0User): User => {
  let u: User = {
    id: "",
    name: "",
    email: "",
    phone: "",
    locale: "",
  };

  if (!user) {
    return u;
  }
  u = {
    id: user.sid as string,
    name: user.given_name ? (user.given_name as string) : (user.name as string),
    email: user.email as string,
    phone: "",
    locale: user.locale as string,
  };
  return u;
};

export { adaptUser };
