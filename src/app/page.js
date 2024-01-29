import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Mainsection from "../components/Mainsection";

export default function Home() {
  return (
    <>
      <div className="bg-gray-900">
        <Nav />
        <Mainsection />
        <Footer />
      </div>
    </>
  );
}
