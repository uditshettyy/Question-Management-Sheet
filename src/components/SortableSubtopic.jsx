import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useStore } from "../store/useQuestionStore";
import QuestionList from "./QuestionList";

export default function SortableSubtopic({ topicId, sub }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: sub.id });
  const style = { transform: CSS.Transform.toString(transform), transition };

  const deleteSubtopic = useStore((s) => s.deleteSubtopic);

  return (
    <div ref={setNodeRef} style={style} className="bg-gray-50 border rounded-lg p-3 mb-3">
      <div className="flex justify-between items-center mb-1 cursor-grab" {...attributes} {...listeners}>
        <h3 className="font-medium text-sm">{sub.title}</h3>
        <button onClick={() => deleteSubtopic(topicId, sub.id)} className="text-red-400 text-xs">
          Delete
        </button>
      </div>

      <QuestionList topicId={topicId} sub={sub} />
    </div>
  );
}
