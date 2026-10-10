import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Rooms from "../components/Rooms";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BookingProvider from "../components/BookingProvider";
import { ROOM_OPTIONS } from "../data/rooms";

export default function Home() {
  return (
    <BookingProvider rooms={ROOM_OPTIONS}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Rooms />
        <Menu />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </BookingProvider>
  );
}
