import React from "react";
import { supabase } from "@/libs/supabase";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

function Descubrir({ texts, error }) {
  if (error) useRouter.push("/404");

  return (
    <>
      <Head>
        <title>Descubre un héroe anónimo - SinAutores.com</title>
      </Head>
      <div className="my-8">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          <span class="block">Descubre un héroe anónimo</span>
          <span class="block text-indigo-500">
            Haz click en uno de los textos para seguir leyendo
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
        {texts &&
          texts.map((text) => {
            return (
              <div
                key={text.id}
                className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-full"
              >
                <Link href={`/${text.id}`} className="block w-full h-full">
                  <div
                    className="w-full p-4 bg-white"
                    dangerouslySetInnerHTML={{
                      __html: text.body.substring(0, 30),
                    }}
                  />
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { data: texts, error } = await supabase
    .from("texts")
    .select("*")
    .eq("published", true)
    .range(0, 11);

  return {
    props: { texts, error }, // will be passed to the page component as props
  };
}

export default Descubrir;
