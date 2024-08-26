import Footer from "./components/footer";
import Socials from "./components/socials";
import Header from "./components/header";
import Image from "./components/image";

function App() {
  return (
    <>
      <div className="bg-lightGray flex h-full min-h-screen flex-col justify-between gap-1 md:items-center">
        <main className="flex flex-1 flex-col justify-evenly gap-1 px-4 font-libreFranklin text-xl md:max-w-screen-md md:px-10 md:pt-10">
          <Header />
          <Image />
        </main>
        <Socials />
        <Footer />
      </div>
    </>
  );
}

export default App;
