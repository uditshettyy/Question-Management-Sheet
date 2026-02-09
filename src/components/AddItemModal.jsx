import { useState } from "react";

export default function AddItemModal({ isOpen, onClose, onSubmit, title }) {
  const [value, setValue] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-96 shadow-xl">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>

        <input
          className="w-full border p-2 rounded mb-4"
          placeholder="Enter name..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onSubmit(value);
              setValue("");
              onClose();
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
