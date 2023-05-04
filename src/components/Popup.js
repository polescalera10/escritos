import React from "react";

function Popup({ show = false, setShow, children }) {
  return (
    <div className={show ? "fixed top-0 bg-gray-400/50 w-full " : "hidden"}>
      <div className="z-10 w-full h-screen overflow-y-auto">
        <div className="flex items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          ></span>
          <div
            className="relative inline-block overflow-hidden transition-all transform sm:align-middle sm:max-w-lg"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
