import { useState } from "react";
import { useStore } from "../store/useQuestionStore";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import SortableQuestion from "./SortableQuestion";

export default function QuestionList({ topicId, sub }) {
  const addQuestion = useStore((s) => s.addQuestion);
  const reorderQuestions = useStore((s) => s.reorderQuestions);
  const [text, setText] = useState("");

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = sub.questions.findIndex((q) => q.id === active.id);
    const newIndex = sub.questions.findIndex((q) => q.id === over.id);

    reorderQuestions(topicId, sub.id, arrayMove(sub.questions, oldIndex, newIndex));
  };

  return (
    <div className="ml-4 mt-3 space-y-2">
      {/* Add Question */}
      <div className="flex gap-2 mb-1">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onPointerDown={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
          className="border p-1 rounded text-sm"
          placeholder="New question"
        />
        <button
          onClick={() => {
            if (!text) return;
            addQuestion(topicId, sub.id, text);
            setText("");
          }}
          className="bg-green-500 text-white px-2 rounded text-sm"
        >
          Add
        </button>
      </div>

      {/* Drag Context for Questions */}
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={sub.questions.map((q) => q.id)}
          strategy={verticalListSortingStrategy}
        >
          <ul className="space-y-2 mt-2">
            {sub.questions.map((q) => (
              <SortableQuestion key={q.id} topicId={topicId} subId={sub.id} q={q} />
            ))}
          </ul>
        </SortableContext>
      </DndContext>
    </div>
  );
}
