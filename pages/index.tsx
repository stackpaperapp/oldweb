import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stack Paper</title>
        <meta
          name="description"
          content="Keep track of your spending habits on the go."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-between items-center min-h-screen">
        <div className="p-8 flex items-center justify-center">
          <div>
            <div className="mb-4">
              <Image
                src="/logo-transparent-thin.png"
                alt="Stack Paper"
                width={600}
                height={400}
                priority
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="mx-8">
                <a href="https://twitter.com/stackpaperapp">
                  <Image
                    src="/twitter-light.svg"
                    alt="Twitter"
                    width={64}
                    height={64}
                    priority
                  />
                </a>
              </div>
              <div>
                <a href="https://github.com/stackpaperapp">
                  <Image
                    src="/github-light.svg"
                    alt="Github"
                    width={64}
                    height={64}
                    priority
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
