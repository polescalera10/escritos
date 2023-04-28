import React from "react";
import { supabase } from "@/libs/supabase";
import Head from "next/head";

function Aleatorio({ text, error }) {
  if (error) useRouter.push("/404");
  return (
    text && (
      <>
        <Head>
          <title>Descubre un héroe anónimo</title>
        </Head>
        <div className="my-8">
          <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block">Descubre un héroe anónimo</span>
            <span class="block text-indigo-500">
              Escritores anónimos quieren llegar a ti
            </span>
          </h2>
        </div>
        <div className="m-auto overflow-hidden rounded-lg shadow-lg w-full">
          <div
            className="w-full p-4 bg-white"
            dangerouslySetInnerHTML={{
              __html: text.body,
            }}
          />
        </div>
      </>
    )
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;

  const { data: text, error } =
    id !== "aleatorio"
      ? await supabase.from("texts").select("*").match({ id })
      : await supabase
          .from("random_texts")
          .select("*")
          .eq("published", true)
          .limit(1);

  return {
    props: {
      text: text[0],
      error,
    },
  };
}

export default Aleatorio;
