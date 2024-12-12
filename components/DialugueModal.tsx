import React, { forwardRef } from "react";

interface DialogueModalProps {
  alert: string;
  onYes?: () => void;
  type: string;
}

const DialogueModal = forwardRef<HTMLDialogElement, DialogueModalProps>( function DialogueModal ({ alert, onYes, type }, ref) {
    function handleClick() {
      // Close the dialog
      if (ref && "current" in ref && ref.current) {
        ref.current.close();
      }

      // Call the onYes function if provided
      if (type === "Confirmation" && onYes) {
        onYes();
      }
    }

    return (
      <dialog ref={ref} className=" w-full backdrop-blur-md bg-gray-700/60 md:w-1/3 rounded-md">
        <div className="w-full p-[25px]  ">
          <h2 className="text-[25px] text-yellow-400 font-semibold font-exo_2 flex justify-center">{alert}</h2>
          <div className="pt-[25px] flex space-x-4 justify-between">
          <button onClick={() => (ref as React.RefObject<HTMLDialogElement>).current?.close()} className="bg-red-300 hover:bg-red-500 ease-in-out duration-300  rounded-lg p-[5px] px-[10px] text-sm md:text-base font-exo_2">
            Close
          </button>
          {type === "Confirmation" && <button onClick={handleClick} className="ml-[15px] bg-green-300 hover:bg-green-500 ease-in-out duration-500 rounded-lg p-[5px] px-[10px] text-sm md:text-base font-exo_2">
            Done
          </button>}
          </div>
         
        </div>

      </dialog>
    );
  }
);

export default DialogueModal;
