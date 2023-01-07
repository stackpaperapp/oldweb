import Head from "next/head";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Separator from "../components/separator";

export default function Home() {
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
        <div className="p-8 flex items-center justify-center">
          <div>
            <Hero />
            <Separator />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
