import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Layout({ children }) {
  return (
    <main>
      <div className="bg-gray-900 h-screen">
        <Navbar />
        {children}
        <Footer />
      </div>
    </main>
  );
}

export default Layout;
