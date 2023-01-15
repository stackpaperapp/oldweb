import Footer from "../../components/footer";
import Separator from "../../components/separator";
import Container from "../../components/container";
import Start from "../../components/start";
import Header from "../../components/header";
import { fetcher, swrOptions } from "../../utils/network";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import useSWR from "swr";
import { User } from "../../types/user";

const LoggedInHome = () => {
  const { user, error, isLoading } = useUser();

  const router = useRouter();
  let registered: boolean = false;
  let u: User = {
    id: "",
    name: "",
    email: "",
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) {
    router.push("/");
  } else {
    u.id = user.sid as string;
    u.name = user.given_name
      ? (user.given_name as string)
      : (user.name as string);

    // Do an SWR fetch to get the user's data
    const { data, error } = useSWR(
      `/api/user/${user.sid}`,
      fetcher,
      swrOptions
    );
    if (error) {
      console.log({ error });
    }
    if (data) {
      console.log("User status: ", data.id ? "registered" : "unregistered");
      console.log({ data });

      if (data.id) {
        registered = true;
      }
    }
  }

  return (
    <main className="flex flex-col justify-between items-center min-h-screen">
      <Container>
        <Header newAccount={!registered} />
        <div className="flex flex-col h-screen justify-between py-4">
          <div>
            {user ? (
              <div className="flex items-center justify-center">
                {registered ? (
                  <div>
                    <p>Create a Budget!</p>
                  </div>
                ) : (
                  <Start user={u} />
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <a href="/api/auth/login">Login</a>
              </div>
            )}
          </div>
          <div>
            <Separator />
            <Footer />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default LoggedInHome;
