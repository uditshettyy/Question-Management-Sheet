import { useState } from "react";
import { useStore } from "../store/useQuestionStore";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import SortableSubtopic from "./SortableSubtopic";

export default function SubtopicList({ topic }) {
  const addSubtopic = useStore((s) => s.addSubtopic);
  const reorderSubtopics = useStore((s) => s.reorderSubtopics);
  const [title, setTitle] = useState("");

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = topic.subtopics.findIndex((s) => s.id === active.id);
    const newIndex = topic.subtopics.findIndex((s) => s.id === over.id);

    reorderSubtopics(topic.id, arrayMove(topic.subtopics, oldIndex, newIndex));
  };

  return (
    <div className="ml-2">

      {/* ADD SUBTOPIC */}
      <div className="flex gap-2 mb-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onPointerDown={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
          className="border border-gray-300 px-2 py-1 rounded-md text-sm w-full"
          placeholder="New subtopic"
        />
        <button
          onClick={() => {
            if (!title) return;
            addSubtopic(topic.id, title);
            setTitle("");
          }}
          className="px-4 py-1 bg-orange-600 text-white rounded-md text-sm hover:bg-orange-700"
        >
          Add
        </button>
      </div>

      {/* DRAG SUBTOPICS */}
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={topic.subtopics.map((s) => s.id)}
          strategy={verticalListSortingStrategy}
        >
          {topic.subtopics.map((sub) => (
            <SortableSubtopic key={sub.id} topicId={topic.id} sub={sub} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
