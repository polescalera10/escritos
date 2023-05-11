import React, { useEffect } from "react";
import Head from "next/head";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { supabase } from "@/libs/supabase";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { useUser } from "@supabase/auth-helpers-react";

function Vote({ text, error }) {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (!user) router.push("/login");
    if (error) router.push("/404");
  }, [error, router, user]);

  const handleAccept = async (id) => {
    const { error } = await supabase
      .from("texts")
      .update({ published: true })
      .eq("id", id);

    if (error) {
      return toast.error("No se ha podido aprobar la solicitud");
    }

    toast.success("Aprobado");
    router.reload();
  };

  const handleDeny = () => {
    router.reload();
  };

  return (
    <>
      <Head>
        <title>ADMIN - SinAutores.com</title>
      </Head>
      <div className="my-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Vota sobre las solicitudes</span>
          <span className="block text-indigo-500">
            Tienes el poder de publicar los escritos de gente anónima
          </span>
        </h2>
      </div>
      <div className="m-auto overflow-hidden  shadow-lg w-full">
        {text ? (
          <>
            <div
              className="w-full p-4 bg-white rounded-lg"
              dangerouslySetInnerHTML={{
                __html: text.body,
              }}
            />
            <div className="sm:flex block pt-2 sm:space-x-2 space-y-2 sm:space-y-0">
              <button
                type="button"
                onClick={() => handleDeny()}
                className={`rounded-lg py-2 w-full px-4 flex justify-center items-center bg-red-500 text-white text-center text-base font-semibold shadow-md`}
              >
                Denegar
              </button>
              <button
                type="button"
                onClick={() => handleAccept(text.id)}
                className={`rounded-lg py-2 w-full px-4 flex justify-center items-center bg-green-500 text-white text-center text-base font-semibold shadow-md`}
              >
                Aceptar
              </button>
            </div>
          </>
        ) : (
          <div className="w-full p-4 bg-white rounded-lg">
            No hay nuevas solicitudes
          </div>
        )}
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const supabase = createServerSupabaseClient(ctx, {
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_KEY,
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };

  const { data: text, error } = await supabase
    .from("random_texts")
    .select("*")
    .eq("published", false)
    .limit(1);

  return {
    props: {
      text: text[0] || null,
      error,
    },
  };
}

export default Vote;
