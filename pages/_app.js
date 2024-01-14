import RoomProvider from "@/context/RoomContext";
import Navbar from "@/components/Navbar";
import "react-datepicker/dist/react-datepicker.css"; // Import these styles before globals.css
import "../datepicker.css"; // Import these styles before globals.css
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import RoomDetails from "./room/[id]";

function MyApp({ Component, pageProps }) {
  return (
    <RoomProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </RoomProvider>
  );
}

export default MyApp;
