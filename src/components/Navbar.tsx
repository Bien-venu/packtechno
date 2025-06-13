import Link from "next/link";
import Logo from "./Logo";
import { CallIcon } from "hugeicons-react";

const Navbar = () => {
  return (
    <div className="absolute top-4 right-0 left-0 z-20 container mx-auto flex w-full items-center justify-between gap-4 py-2 text-sm text-white">
      <Logo />
      <div className="flex items-center gap-14">
        <div className="flex items-center gap-14">
          <Link
            href=""
            className="underline decoration-white underline-offset-4"
          >
            Home
          </Link>
          <Link href="">About</Link>
          <Link href="">Learn</Link>
          <Link href="">Pricing</Link>
        </div>
        <div className="bg-primary text-dark flex items-center gap-1 rounded-md p-3 px-6 text-white">
          <CallIcon size={15} />
          Contact
        </div>
      </div>
    </div>
  );
};

export default Navbar;
