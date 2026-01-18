

import React from "react";
import { Button } from "./ui/button";
import Logo from "./logo";

const Footer = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        alert(data.message || 'Thank you for subscribing!');
        e.currentTarget.reset();
      } else {
        alert(data.error || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <footer id="access" className="w-full">
      <div className="py-[82px] mx-auto max-w-[744px] flex flex-col items-center gap-[30px] px-4">
        <h2 className="md:text-[60px] text-[40px] font-medium -tracking-[4px] text-center">
          the first social os for student life.
        </h2>

        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col md:flex-row gap-[22px] mt-8 w-full max-w-[600px]"
        >
          <input
            name="email"
            type="email"
            placeholder="email"
            required
            className="flex-1 px-6 py-3 rounded-full backdrop-blur-md bg-white/20 border-2 border-white shadow-lg shadow-black/10 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent text-white placeholder-white/70 w-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          />
          <button
            type="submit"
            className="py-3 px-8 rounded-full font-medium text-white transition-all duration-300 border-2 border-white hover:shadow-lg hover:bg-white/10 whitespace-nowrap"
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
        </form>

        <nav className="mt-[100px] md:mt-[200px] w-full">
          <div className="flex justify-between items-center w-full p-4 md:p-[26.5px] max-w-[1200px] mx-auto">
            <Logo />
            <Button 
              className="py-2 px-3.5 rounded-full text-[18px] font-medium"
              onClick={() => {
                const form = document.querySelector('form');
                form?.scrollIntoView({ behavior: 'smooth' });
                form?.querySelector('input')?.focus();
              }}
            >
              Get Early Access
            </Button>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
