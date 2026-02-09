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
      className="flex justify-between items-center bg-white px-3 py-2 rounded-lg shadow-sm text-sm hover:bg-gray-100 transition"
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
            className="border p-1 rounded text-sm"
            autoFocus
          />
        ) : (
          <span onDoubleClick={() => setEditing(true)}>{q.text}</span>
        )}
      </div>

      <button
        onClick={() => deleteQuestion(topicId, subId, q.id)}
        className="text-red-500 text-xs"
      >
        Delete
      </button>
    </li>
  );
}
