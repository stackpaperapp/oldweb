import Head from "next/head";
import { useRouter } from "next/router";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Loading from "../components/loading";
import Separator from "../components/separator";
import Container from "../components/container";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  if (isLoading) return <Loading />;
  if (error) return <div>{error.message}</div>;
  if (user) {
    router.push("/_");
  }

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
      <main className="flex flex-col justify-between items-center min-h-screen py-8">
        <Container>
          <div className="flex flex-col h-screen justify-between">
            <div>
              <Hero />
              <div className="flex items-center justify-center">
                <button
                  className="font-serif text-gray-900 bg-gradient-to-r from-lime-300 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-bold rounded-lg text-3xl px-8 py-6 text-center mr-2 mb-2"
                  onClick={() => router.push("/api/auth/login")}
                >
                  Let's Go!
                </button>
              </div>
            </div>
            <div>
              <Separator />
              <Footer />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
