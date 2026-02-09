import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import SubtopicList from "./SubtopicList";
import { useStore } from "../store/useQuestionStore";

export default function SortableTopic({ topic }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: topic.id });
  const style = { transform: CSS.Transform.toString(transform), transition };

  const deleteTopic = useStore((s) => s.deleteTopic);

  return (
    <div ref={setNodeRef} style={style} className="bg-white p-4 rounded-xl shadow mb-4">
      
      {/* ONLY header is draggable */}
      <div
        className="flex justify-between items-center border-b pb-2 mb-2 cursor-grab"
        {...attributes}
        {...listeners}
      >
        <h2 className="text-lg font-semibold">{topic.title}</h2>
        <button onClick={() => deleteTopic(topic.id)} className="text-red-500 text-sm">
          Delete
        </button>
      </div>

      <SubtopicList topic={topic} />
    </div>
  );
}
