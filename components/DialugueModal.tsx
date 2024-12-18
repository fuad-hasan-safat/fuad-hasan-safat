import React, { forwardRef } from "react";

type DialogueModalProps = {
    alert: string;
    type: "Confirmation" | "Error";
    onYes: () => void;
};

const DialogueModal = forwardRef<HTMLDialogElement, DialogueModalProps>(
    ({ alert, type, onYes }, ref) => {
        const isError = type === "Error";

        return (
            <dialog
                ref={ref}
                className="bg-white/60 opacity-0 open:opacity-100 shadow-lg backdrop-blur p-6 border rounded-lg w-full max-w-md transform transition-transform duration-300 open:scale-100 scale-100"
            >
                <div className="text-center">
                    {/* Header */}
                    <div className={`text-2xl font-semibold ${isError ? "text-red-600" : "text-green-600"}`}>
                        {isError ? "Error" : "Confirmation"}
                    </div>

                    {/* Alert Message */}
                    <p className="mt-4 text-gray-700">{alert}</p>

                    {/* Buttons */}
                    <div className="flex justify-center gap-4 mt-6">
                        {type === "Confirmation" && (
                            <button
                                onClick={onYes}
                                className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-md focus:ring-2 focus:ring-green-400 text-white focus:outline-none"
                            >
                                Yes
                            </button>
                        )}
                        <button
                            onClick={() =>
                                (ref as React.RefObject<HTMLDialogElement>).current?.close()
                            }
                            className="bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded-md focus:ring-2 focus:ring-gray-400 text-white focus:outline-none"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </dialog>
        );
    }
);
DialogueModal.displayName = "DialogueModal";

export default DialogueModal;