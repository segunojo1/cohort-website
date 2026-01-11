import Link from "next/link";
import Logo from "./logo";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between z-[999]  items-center fixed w-full p-[26.5px] px-[28px]">
      <Logo />
      <Link href="#access">
        <Button className="py-2 px-3.5 rounded-full text-[18px] font-medium cursor-pointer">
          Get Early Access
        </Button>
      </Link>
    </nav>
  );
};

export default Navbar;
