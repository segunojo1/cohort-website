import React from "react";
import Navbar from "./navbar";
import { Button } from "./ui/button";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer id="access">
      <div className="py-[82px] mx-auto max-w-[744px] flex flex-col items-center gap-[30px]">
        <h2 className="md:text-[60px] text-[40px] font-medium -tracking-[4px]">
          the first social os for student life.
        </h2>

        <div className="flex md:flex-row flex-col gap-[22px] mt-8">
          <input
            type="text"
            placeholder="email"
            className="px-6 py-3  rounded-full backdrop-blur-md bg-white/20 border-2 border-white shadow-lg shadow-black/10 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent text-black min-w-[312px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          />
          <button
            className="py-3 px-8 rounded-full font-medium text-black transition-all duration-300 border-2 border-white hover:shadow-lg "
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
            }}
          >
            get early access
          </button>
        </div>
      </div>

      <nav className="flex mt-[200px] justify-between items-center w-full p-[26.5px] px-[28px]">
        <Logo />
        <Button className="py-2 px-3.5 rounded-full text-[18px] font-medium">
          Get Early Access
        </Button>
      </nav>
    </footer>
  );
};

export default Footer;
