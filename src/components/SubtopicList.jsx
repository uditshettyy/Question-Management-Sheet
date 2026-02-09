import { useState } from "react";
import { useStore } from "../store/useQuestionStore";
import QuestionList from "./QuestionList";

export default function SubtopicList({ topic }) {
  const addSubtopic = useStore((s) => s.addSubtopic);
  const deleteSubtopic = useStore((s) => s.deleteSubtopic);
  const [title, setTitle] = useState("");

  return (
    <div className="ml-4 mt-2">
      <div className="flex gap-2 mb-2">
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="border p-1 rounded" />
        <button onClick={() => { addSubtopic(topic.id, title); setTitle(""); }} className="bg-blue-500 text-white px-2 rounded">Add</button>
      </div>

      {topic.subtopics.map((sub) => (
        <div key={sub.id} className="bg-gray-50 rounded-lg p-3 mb-2">
  <div className="flex justify-between items-center mb-1">
    <h3 className="font-medium text-sm">{sub.title}</h3>
    <button className="text-red-400 text-xs">Delete</button>
  </div>

  <QuestionList topicId={topic.id} sub={sub} />
</div>

      ))}
    </div>
  );
}
