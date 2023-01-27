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
import useGetUser from "../../hooks/use-get-user";

const LoggedInHome = () => {
  let registered: boolean = false;

  const user = useGetUser();

  if (user) {
    if (user.loading) {
      return <Loading />;
    }
    if (user.error) {
      return <div>{user.error.message}</div>;
    }
  }

  // Do an SWR fetch to get the user's data
  const { data, isLoading, error } = useSWR(
    `/api/user/${user.user.userid}`,
    fetcher,
    swrOptions
  );
  if (error) {
    console.log({ error });
  }

  if (data && data.user && data.auth0 === data.user.auth0) {
    console.log("User is registered");

    registered = true;
  }

  const handleSubmit = async (phone: string) => {
    user.user.phone = phone;
    await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user.user),
    });
    window.location.reload();
  };

  return (
    <main className="flex flex-col justify-between items-center min-h-screen">
      <Container>
        <Header newAccount={!registered} />
        <div className="flex flex-col h-screen justify-between py-4">
          <div className="flex items-center justify-center">
            {isLoading ? (
              <Loading />
            ) : !registered ? (
              <Start user={user.user} handleSubmit={handleSubmit} />
            ) : (
              <div>
                <p>Dashboard</p>
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
