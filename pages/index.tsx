import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";

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
            <div className="mb-4">
              <Image
                src="/logo-600x400.png"
                alt="Stack Paper"
                width={600}
                height={400}
                priority
              />
              <div className="flex items-center justify-center">
                <p>
                  Keep track of your spending habits on the go, and save more
                </p>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
