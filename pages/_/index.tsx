import Footer from "../../components/footer";
import Separator from "../../components/separator";
import Container from "../../components/container";
import Loading from "../../components/loading";
import Header from "../../components/header";
import Start from "../../components/start";
import { fetcher, swrOptions } from "../../utils/network";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import useSWR from "swr";
import { adaptUser } from "../../utils/adapter";

const LoggedInHome = () => {
  let registered: boolean = false;
  const {
    user: auth0User,
    error: auth0Error,
    isLoading: auth0Loading,
  } = useUser();
  const router = useRouter();
  const u = adaptUser(auth0User);

  if (auth0Loading) return <Loading />;
  if (auth0Error) return <div>{auth0Error.message}</div>;
  if (!auth0User) {
    router.push("/");
    return;
  }

  // Do an SWR fetch to get the user's data
  const { data, isLoading, error } = useSWR(
    `/api/user/${auth0User.sub}`,
    fetcher,
    swrOptions
  );
  if (error) {
    console.log({ error });
  }

  if (data && data.user && data.auth0 === data.user.auth0) {
    console.log("User is registered");

    registered = true;
    router.push("/budgets");
  }

  const handleSubmit = async (phone: string) => {
    u.phone = phone;
    await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(u),
    });
    router.push("/budgets");
  };

  return (
    <main className="flex flex-col justify-between items-center min-h-screen">
      <Container>
        <Header newAccount={!registered} />
        <div className="flex flex-col h-screen justify-between py-4">
          <div className="flex items-center justify-center">
            {/* {isLoading && data && !data.user ? (
              <div>Loading...</div>
            ) : (
              <Start user={u} handleSubmit={handleSubmit} />
            )} */}
            {isLoading && <Loading />}
            {!isLoading && !registered && (
              <Start user={u} handleSubmit={handleSubmit} />
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
