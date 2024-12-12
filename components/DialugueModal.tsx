import React, { forwardRef, useRef } from "react";

interface DialogueModalProps {
  alert: string;
  onYes?: () => void;
  type: string;
}

const DialogueModal = forwardRef<HTMLDialogElement, DialogueModalProps>(
  ({ alert, onYes, type }, ref) => {
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
      <dialog ref={ref} className="w-1/3 rounded-md">
        <div className="w-full p-[25px]  ">
          <h2 className="text-xl text-red-500 flex justify-center">{alert}</h2>
          <div className="pt-[25px] flex space-x-4 justify-between">
          <button onClick={() => (ref as React.RefObject<HTMLDialogElement>).current?.close()} className="bg-red-300 rounded-lg p-[5px] text-base">
            Close
          </button>
          {type === "Confirmation" && <button onClick={handleClick} className="ml-[15px] rounded-lg p-[5px] text-base">
            Done
          </button>}
          </div>
         
        </div>

      </dialog>
    );
  }
);

export default DialogueModal;
