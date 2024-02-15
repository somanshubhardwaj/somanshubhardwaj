import Footer from "../components/Footer";
import Mainsection from "../components/Mainsection";
import Main from "@/components/Main";
export default function Home() {
  return (
    <>
      <div className="bg-black text-white">
        {/*  <Nav />*/}
        <Main />
        <Mainsection />
        <Footer />
      </div>
    </>
  );
}
