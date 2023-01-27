import { useUser } from "@auth0/nextjs-auth0/client";
import { adaptUser } from "../utils/adapter";
import type { User } from "../types/user";

type GetUser = {
  user: User;
  loading: boolean;
  error: any;
};

const useGetUser = () => {
  const {
    user: auth0User,
    error: auth0Error,
    isLoading: auth0Loading,
  } = useUser();

  const user: GetUser = {
    user: adaptUser(auth0User),
    loading: auth0Loading,
    error: auth0Error,
  };

  return user;
};

export default useGetUser;
