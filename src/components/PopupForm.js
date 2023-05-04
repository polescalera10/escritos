import React from "react";

const PopupForm = ({ securityNumber, setForm, form }) => {
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="rounded-t-lg p-8 bg-white shadow text-black">
      <div className="my-8">
        <h2 className="text-xl block text-indigo-500">
          Rellena el formulario para enviar tu texto
        </h2>
      </div>

      <div className="flex flex-col my-4">
        <label htmlFor="name-with-label" className="text-gray-700 mb-4">
          Escribe el siguiente numero: {securityNumber}
        </label>
        <input
          type="text"
          onChange={handleForm}
          name="securityNumber"
          className="rounded-lg flex-1 appearance-none border border-indigo-300 w-full py-2 px-4 bg-white text-indigo-700 placeholder-indigo-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="123456"
        />
      </div>

      <div className="flex flex-col relative ">
        <label htmlFor="name-with-label" className="text-gray-700 mb-4">
          Deja tu correo para saber donde has guardado tu texto
        </label>
        <div className="flex">
          <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-indigo-300 text-indigo-500 shadow-sm text-sm">
            <svg
              width="15"
              height="15"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
            </svg>
          </span>
          <input
            type="text"
            onChange={handleForm}
            className=" rounded-r-lg flex-1 appearance-none border border-indigo-300 w-full py-2 px-4 bg-white text-indigo-700 placeholder-indigo-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            name="email"
            placeholder="tucorreo@email.com"
          />
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
