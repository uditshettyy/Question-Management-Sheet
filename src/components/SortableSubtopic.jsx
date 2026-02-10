import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useStore } from "../store/useQuestionStore";
import QuestionList from "./QuestionList";
import { useState } from "react";

export default function SortableSubtopic({ topicId, sub }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: sub.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const deleteSubtopic = useStore((s) => s.deleteSubtopic);
  const editSubtopic = useStore((s) => s.editSubtopic);

  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(sub.title);
  const [open, setOpen] = useState(false); // 🔥 DROPDOWN STATE

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white border rounded-xl p-4 mb-4 shadow-sm hover:shadow-md transition"
    >
      <div
        className="flex justify-between items-center cursor-pointer mb-2"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-xs">
            {open ? "▼" : "▶"}
          </span>

          {editing ? (
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={() => {
                editSubtopic(topicId, sub.id, value);
                setEditing(false);
              }}
              onPointerDown={(e) => e.stopPropagation()}
              className="border border-orange-400 px-2 py-1 rounded text-sm"
              autoFocus
            />
          ) : (
            <h3
              className="font-medium text-sm"
              {...attributes}
              {...listeners}
            >
              {sub.title}
            </h3>
          )}

          <span className="text-xs text-gray-400">
            ({sub.questions.length})
          </span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setEditing(true);
            }}
            className="px-2 py-1 border rounded text-xs text-orange-500 hover:bg-orange-50"
          >
            Edit
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteSubtopic(topicId, sub.id);
            }}
            className="px-2 py-1 border rounded text-xs text-orange-500 hover:bg-orange-50"
          >
            Delete
          </button>
        </div>
      </div>

      {open && <QuestionList topicId={topicId} sub={sub} />}
    </div>
  );
}
