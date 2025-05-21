
import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Helmet>
        <title>{title} | Path Panda</title>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
