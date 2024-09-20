"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PropsWithChildren } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Discover", href: "#" },
  { label: "About Us", href: "#" },
];

const NavbarLink = ({
  children,
  href,
}: PropsWithChildren<{ href: string }>) => {
  return (
    <div className="group relative h-fit w-fit">
      <Link href={href}>{children}</Link>
      <span className="absolute -inset-x-1 -bottom-2 h-1 origin-left scale-x-0 rounded bg-white transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
    </div>
  );
};

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="absolute inset-x-0 z-10 mt-16 flex items-center justify-between bg-transparent px-10 sm:px-20"
    >
      {/* LOGO */}
      <Link href={"#"}>
        <h1 className="text-2xl font-bold text-white">AnimeBinge</h1>
      </Link>

      <div className="flex items-center gap-12 text-white">
        {/* NAVBAR LINKS */}
        <div className="hidden gap-[3.625rem] lg:flex">
          {navLinks.map((link, index) => (
            <NavbarLink href={link.href} key={index}>
              {link.label}
            </NavbarLink>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="hidden gap-5 sm:flex">
          <button className="text-red hover:before:bg-redborder-red-500 relative h-[44px] w-[112px] overflow-hidden rounded-md border bg-transparent px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-black hover:before:left-0 hover:before:w-full">
            <span className="relative z-10">Sign Up</span>
          </button>
          <button className="relative flex h-[44px] w-[112px] items-center justify-center overflow-hidden rounded-md bg-loginButton font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-black hover:before:border-[25px]">
            <span className="relative z-10">Log In</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
