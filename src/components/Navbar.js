import Link from "next/link";
import React from "react";

function Navbar() {
  const navigation = [
    { title: "Descubrir", path: "/descubrir" },
    { title: "Aleatorio", path: "/aleatorio" },
  ];
  return (
    <header>
      <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 sm:flex sm:space-x-6">
        <Link className="text-white" href="/">
          Escritos
        </Link>
        <ul className="py-4 flex-1 items-center flex space-x-3 sm:space-x-6 sm:justify-end">
          {navigation.map((item, idx) => (
            <li className="text-gray-200" key={idx}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
