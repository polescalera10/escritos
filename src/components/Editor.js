import { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

function Editor() {
  const [value, setValue] = useState("");

  return (
    <ReactQuill
      placeholder="Escribe aqui..."
      theme="snow"
      value={value}
      onChange={setValue}
    />
  );
}

export default Editor;
