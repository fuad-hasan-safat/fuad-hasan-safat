import React, { forwardRef } from 'react';

interface DialugueModalProps {
  dialogue: string; // Fixed typo
  fncOfDone: () => void;
  type: string;
}

const DialugueModal = forwardRef<HTMLDialogElement, DialugueModalProps>(
  ({ dialogue, fncOfDone, type }, ref) => {
    return (
      <dialog
        ref={ref}
        className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
      >
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="mb-4 font-semibold text-xl">{type}</h2>
          <p className="mb-4">{dialogue}</p>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 mr-2 px-4 py-2 rounded text-white"
              onClick={fncOfDone}
            >
              Done
            </button>
            <button
              className="bg-gray-300 px-4 py-2 rounded text-gray-800"
              onClick={() => console.log('Cancelled')}
            >
              Cancel
            </button>
          </div>
        </div>
      </dialog>
    );
  }
);

export default DialugueModal;
