import Footer from "./components/footer";
import Socials from "./components/socials";
import Header from "./components/header";
import Image from "./components/image";

function App() {
  return (
    <>
      <div className="flex h-full min-h-screen flex-col justify-between bg-lightGray">
        <main className="flex flex-1 flex-col justify-evenly p-4 font-libreFranklin text-xl">
          <Header />
          <Image />
          <Socials />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
