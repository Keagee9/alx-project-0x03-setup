import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {/* Added padding-top to prevent content from being hidden by the fixed header. 
          pt-28 (7rem/112px) provides enough space. */}
      <main className="pt-28">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;