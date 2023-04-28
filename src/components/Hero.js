import React from "react";
import Editor from "./Editor";
import Link from "next/link";

function Hero() {
  return (
    <section>
      <div className="py-28 gap-12 text-white md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-sm text-indigo-600 font-medium">
            Escribe Anónimamente y Comparte tus Historias Únicas
          </h1>
          <h2 className="text-4xl text-wite font-extrabold mx-auto md:text-5xl">
            Desata tu inspiración{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
              héroe anónimo
            </span>
          </h2>
          <p className="max-w-2xl mx-auto">
            Atrévete a escribir sin límites y comparte tus ideas con el mundo,
            en un espacio seguro y acogedor donde todos somos cómplices
            creativos.
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <Link
              href="/descubrir"
              className="block py-2 px-4 text-white font-medium bg-gradient-to-r from-[#4F46E5] to-[#E114E5] duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
            >
              Descubrir
            </Link>
            <Link
              href="/aleatorio"
              className="block py-2 px-4 font-medium duration-150 border rounded-lg"
            >
              Aleatorio
            </Link>
          </div>
        </div>
        <div className="mt-14">
          <Editor />
        </div>
      </div>
    </section>
  );
}

export default Hero;
