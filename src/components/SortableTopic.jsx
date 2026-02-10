import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import SubtopicList from "./SubtopicList";
import { useStore } from "../store/useQuestionStore";
import { useState } from "react";

export default function SortableTopic({ topic }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: topic.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const deleteTopic = useStore((s) => s.deleteTopic);
  const editTopic = useStore((s) => s.editTopic);

  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(topic.title);
  const [open, setOpen] = useState(false);

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-gray-50 border rounded-xl p-5 mb-5 shadow-sm"
    >
      <div
        className="flex justify-between items-center border-b pb-2 mb-3 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-3">
          <span className="text-gray-500 text-sm">
            {open ? "▼" : "▶"}
          </span>

          {editing ? (
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={() => {
                editTopic(topic.id, value);
                setEditing(false);
              }}
              onPointerDown={(e) => e.stopPropagation()}
              className="border border-orange-400 bg-white px-2 py-1 rounded text-sm"
              autoFocus
            />
          ) : (
            <h2
              className="text-lg font-semibold"
              {...attributes}
              {...listeners}
            >
              {topic.title}
            </h2>
          )}

          <span className="text-xs text-gray-400">
            ({topic.subtopics.length})
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
              deleteTopic(topic.id);
            }}
            className="px-2 py-1 border rounded text-xs text-orange-500 hover:bg-orange-50"
          >
            Delete
          </button>
        </div>
      </div>

      {open && <SubtopicList topic={topic} />}
    </div>
  );
}
