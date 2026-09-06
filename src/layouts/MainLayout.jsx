import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function MainLayout({ children }) {
  return (
    <div
      className="
        crt
        system-grid
        relative
        min-h-screen
        overflow-hidden
        bg-black
        text-white
      "
    >
      <div className="noise" />

      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;