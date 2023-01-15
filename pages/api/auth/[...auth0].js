import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export default handleAuth({
  login: handleLogin({
    authorizationParams: {
      audience: "https://penny-pincher",
      scope: "openid profile email read:user",
    },
  }),
});
