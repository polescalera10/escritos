import { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { supabase } from "@/libs/supabase";
import { toast } from "react-hot-toast";

const SubmitButton = ({ onClick }) => (
  <button
    type="button"
    onClick={() => onClick()}
    className="py-2 lg:w-1/3 sm:w-full px-4 flex justify-center items-center  bg-gradient-to-r from-[#4F46E5] to-[#E114E5] hover:bg-[#E114E5] focus:ring-red-500 focus:ring-offset-[#E114E5] text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
  >
    <svg
      width="20"
      height="20"
      fill="currentColor"
      className="mr-2"
      viewBox="0 0 1792 1792"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"></path>
    </svg>
    Enviar texto
  </button>
);

function Editor() {
  const [value, setValue] = useState("");

  const handleSubmit = async () => {
    const { status } = await supabase
      .from("texts")
      .insert({
        body: value,
        author: "me",
        likes: 0,
        id: +new Date(),
        created_at: new Date(),
        published: false,
      })
      .single();

    if (status === 201) {
      toast.success("Hemos recibido tu escrito correctamente", {
        duration: 4000,
      });
      setValue("");
    } else {
      toast.error("Ups! Ha ocurrido un error", { duration: 4000 });
    }
  };

  return (
    <div className="flex flex-col space-y-4 items-center">
      <ReactQuill
        placeholder="Escribe aqui..."
        className="bg-white text-black w-full"
        theme="snow"
        value={value}
        onChange={setValue}
      />
      <SubmitButton onClick={handleSubmit} />
    </div>
  );
}

export default Editor;
