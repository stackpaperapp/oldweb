import type { User, Auth0User } from "../types/user";

const adaptUser = (user: Auth0User): User => {
  let u: User = {
    userid: "",
    name: "",
    email: "",
    phone: "",
    locale: "",
  };

  if (!user) {
    return u;
  }
  u = {
    userid: user.sub as string,
    name: user.given_name ? (user.given_name as string) : (user.name as string),
    email: user.email as string,
    phone: "",
    locale: user.locale as string,
  };
  return u;
};

export { adaptUser };
