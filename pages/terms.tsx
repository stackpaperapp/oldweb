import Head from "next/head";
import { useRouter } from "next/router";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Separator from "../components/separator";
import Container from "../components/container";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Stack Paper Terms of Use</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-between items-center min-h-screen">
        <Container>
          <div className="flex flex-col h-screen justify-between">
            <div className="py-4">
              <h1 className="text-3xl my-8">Stack Paper Terms of Use</h1>
              <p className="mb-4">
                By accessing or using the Stack Paper app (the "App"), you agree
                to be bound by these terms of use (the "Terms"). If you do not
                agree to these Terms, you may not access or use the App.
              </p>
              <p className="mb-4">
                Scope of the Terms: These Terms apply to your access and use of
                the App.
              </p>
              <p className="mb-4">
                License to Use the App: Subject to your compliance with these
                Terms, Stack Paper grants you a limited, non-exclusive,
                non-transferable, revocable license to use the App for your
                personal use.
              </p>
              <p className="mb-4">
                Ownership of the App: Stack Paper and its licensors own all
                rights, title, and interest in and to the App and its content,
                including all intellectual property rights. You acknowledge that
                the App and its content are protected by copyright, trademark,
                and other laws.
              </p>
              <p className="mb-4">
                Restrictions on Use: You may not modify, distribute, or create
                derivative works based on the App or its content. You may not
                use the App for any commercial purpose.
              </p>
              <p className="mb-4">
                Disclaimer of Warranties: The App is provided on an "as is" and
                "as available" basis. Stack Paper and its licensors disclaim all
                warranties, express or implied, including but not limited to the
                implied warranties of merchantability, fitness for a particular
                purpose, and non-infringement.
              </p>
              <p className="mb-4">
                Limitation of Liability: Stack Paper and its licensors shall not
                be liable for any damages resulting from the use of the App,
                including but not limited to direct, indirect, incidental,
                consequential, or punitive damages.
              </p>
              <p className="mb-4">
                Indemnification: You agree to indemnify and hold Stack Paper and
                its licensors harmless from any claims, damages, or expenses
                arising from your use of the App.
              </p>
              <p className="mb-4">
                Changes to the Terms: Stack Paper reserves the right to modify
                these Terms at any time. Any changes to the Terms will be
                effective immediately upon posting. You are responsible for
                reviewing the Terms periodically for updates. Your continued use
                of the App after the posting of any changes to the Terms
                constitutes your acceptance of those changes.
              </p>
              <p className="mb-4">
                Termination: Stack Paper reserves the right to terminate your
                access to the App at any time for any reason.
              </p>
              <p className="mb-4">
                Governing Law: These Terms are governed by the laws of the State
                of California, without giving effect to any principles of
                conflicts of law.
              </p>
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
