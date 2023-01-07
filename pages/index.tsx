import Head from "next/head";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Separator from "../components/separator";
import Container from "../components/container";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Head>
        <title>Stack Paper</title>
        <meta
          name="description"
          content="Keep track of your spending habits on the go, and save more"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-between items-center min-h-screen">
        <Container>
          <Hero />
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
    </>
  );
}
