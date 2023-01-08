import Head from "next/head";
import Footer from "../../components/footer";
import Separator from "../../components/separator";
import Container from "../../components/container";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";

const LoggedInHome = () => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) {
    router.push("/");
  }

  return (
    <main className="flex flex-col justify-between items-center min-h-screen">
      <Container>
        {user ? (
          <div className="flex items-center justify-center">
            <p>
              Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <a href="/api/auth/login">Login</a>
          </div>
        )}
        <Separator />
        <Footer />
      </Container>
    </main>
  );
};

export default LoggedInHome;
