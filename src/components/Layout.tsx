import React, { type PropsWithChildren } from "react";
import Header from "./Header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      <Header/>
      <main className="min-h-screen container mx-auto px-5 py-8">
        {children}
      </main>
      <footer className="border-t  bg-gradient-to-r  backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-6 text-center">
          <p className="text-gray-300 text-sm md:text-base tracking-wide">
            ✨ Made with ❤️ by{" "}
            <span className="font-semibold text-white">Prasun Prabhat</span>
          </p>
          <p className="mt-2 text-xs text-gray-500">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
