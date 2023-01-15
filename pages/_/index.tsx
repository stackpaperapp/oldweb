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
import { adaptUser } from "../../utils/adapter";

const LoggedInHome = () => {
  let registered: boolean = false;
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const u = adaptUser(user);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) {
    router.push("/");
  } else {
    // Do an SWR fetch to get the user's data
    const { data, error } = useSWR(
      `/api/user/${user.sub}`,
      fetcher,
      swrOptions
    );
    if (error) {
      console.log({ error });
    }
    if (data && data.id) {
      registered = true;
    }
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
  };

  return (
    <main className="flex flex-col justify-between items-center min-h-screen">
      <Container>
        <Header newAccount={!registered} />
        <div className="flex flex-col h-screen justify-between py-4">
          <div className="flex items-center justify-center">
            {registered ? (
              <div>
                <p>Create a Budget!</p>
              </div>
            ) : (
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
