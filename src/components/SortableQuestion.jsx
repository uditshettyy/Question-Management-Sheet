import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useStore } from "../store/useQuestionStore";

export default function SortableQuestion({ topicId, subId, q }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: q.id });
  const style = { transform: CSS.Transform.toString(transform), transition };

  const deleteQuestion = useStore((s) => s.deleteQuestion);
  const editQuestion = useStore((s) => s.editQuestion);

  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(q.text);

  return (
    <li
      ref={setNodeRef}
      style={style}
      className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg border text-sm"
    >
      <div className="flex items-center gap-3 cursor-grab" {...attributes} {...listeners}>
        {editing ? (
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={() => {
              editQuestion(topicId, subId, q.id, value);
              setEditing(false);
            }}
            onPointerDown={(e) => e.stopPropagation()}
            className="border border-blue-400 bg-white px-2 py-1 rounded text-sm"
            autoFocus
          />
        ) : (
          <span>{q.text}</span>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setEditing(true)}
          className="px-2 py-1 border rounded-md text-orange-600 text-xs hover:bg-blue-50"
        >
          Edit
        </button>

        <button
          onClick={() => deleteQuestion(topicId, subId, q.id)}
          className="px-2 py-1 border rounded-md text-orange-600 text-xs hover:bg-red-50"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
