import Header from "./Header";
import CTASection from "./CTASection";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <CTASection />
      <Footer />
    </div>
  );
};

export default Layout;
