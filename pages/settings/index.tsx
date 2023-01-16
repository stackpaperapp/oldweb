import Footer from "../../components/footer";
import Separator from "../../components/separator";
import Container from "../../components/container";
import Header from "../../components/header";
import useSWR from "swr";

const Budgets = () => {
  return (
    <main className="flex flex-col justify-between items-center min-h-screen">
      <Container>
        <Header />
        <div className="flex flex-col h-screen justify-between py-4">
          <div className="flex items-center justify-center">
            <div>
              <p>Settings</p>
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
