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

const Budgets = () => {
  return (
    <main className="flex flex-col justify-between items-center min-h-screen">
      <Container>
        <Header />
        <div className="flex flex-col h-screen justify-between py-4">
          <div className="flex items-center justify-center">
            <div>
              <p>Create a Budget!</p>
            </div>
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

export default Budgets;
