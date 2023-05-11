import { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { supabase } from "@/libs/supabase";
import { toast } from "react-hot-toast";
import Popup from "./Popup";
import CustomButton from "./CustomButton";
import PopupForm from "./PopupForm";

const EMPTY_FORM = { securityNumber: "", email: "" };

function Editor({ securityNumber }) {
  const [value, setValue] = useState("");
  const [form, setForm] = useState(EMPTY_FORM);
  const [showSnippet, setShowSnippet] = useState(false);

  const handleSubmit = async () => {
    if (Number(form.securityNumber) !== securityNumber) {
      toast.error("Por favor, escribe el numero correctamente");
      return false;
    }

    if (
      !form.email ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)
    ) {
      toast.error("Por favor, rellena el email correctamente");
      return false;
    }

    const { status } = await supabase
      .from("texts")
      .insert({
        body: value,
        author: form.email,
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
      setShowSnippet(false);
      setValue("");
      setForm(EMPTY_FORM);
    } else {
      setShowSnippet(false);
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
      <CustomButton uploadLogo onClick={() => setShowSnippet(true)}>
        Enviar texto
      </CustomButton>
      <Popup show={showSnippet} setShow={setShowSnippet}>
        <div
          onClick={() => setShowSnippet(false)}
          className="absolute text-black right-4 top-2 text-2xl hover:cursor-pointer hover:text-indigo-500"
        >
          X
        </div>
        <PopupForm
          securityNumber={securityNumber}
          setForm={setForm}
          form={form}
        />
        <CustomButton fullWidth rounded="bottom" onClick={handleSubmit}>
          Enviar
        </CustomButton>
      </Popup>
    </div>
  );
}

export default Editor;
