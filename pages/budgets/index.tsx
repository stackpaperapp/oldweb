import Footer from "../../components/footer";
import Separator from "../../components/separator";
import Container from "../../components/container";
import Header from "../../components/header";
import { fetcher, swrOptions } from "../../utils/network";
import useSWR from "swr";

const Budgets = () => {
  // Get the user from Auth0

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

// export async function getServerSideProps(context) {
//   console.log({ q: context.query, p: context.params });

//   const url = `/u/${context.query.address}/b`;
//   const res = await fetch(url);
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }

export default Budgets;
