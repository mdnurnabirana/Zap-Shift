import React from "react";
import Logo from "../../../components/Logo/Logo";
import { MdArrowOutward } from "react-icons/md";

const navLinks = [
  { id: 1, name: "Services", link: "#" },
  { id: 2, name: "Coverage", link: "#" },
  { id: 3, name: "About Us", link: "#" },
  { id: 4, name: "Pricing", link: "#" },
  { id: 5, name: "Blog", link: "#" },
  { id: 6, name: "Contact", link: "#" },
];

const Navbar = () => {
  return (
    <header className="max-w-7xl mx-auto flex items-center justify-between bg-white rounded-2xl px-8 py-4 mt-7 shadow-sm">
      <Logo />

      <nav>
        <ul className="flex items-center gap-8 text-[#606060] font-medium">
          {navLinks.map((menu) => (
            <li key={menu.id}>
              <a
                href={menu.link}
                className="hover:text-black transition-colors duration-200"
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <button className="px-6 py-3 rounded-xl text-[#606060] text-lg font-semibold border border-[#E5E5E5] hover:bg-gray-50 transition">
          Sign In
        </button>

        <button className="px-6 py-3 rounded-xl text-[#1F1F1F] text-lg font-semibold bg-[#CAEB66] border border-[#CAEB66] hover:bg-[#bce45a] transition">
          Sign Up
        </button>

        <button className="rounded-full bg-[#1F1F1F] p-3 hover:opacity-80 transition">
          <MdArrowOutward color="#CAEB66" size={22} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;