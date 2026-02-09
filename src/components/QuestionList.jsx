import { useState } from "react";
import { useStore } from "../store/useQuestionStore";

export default function QuestionList({ topicId, sub }) {
  const addQuestion = useStore((s) => s.addQuestion);
  const deleteQuestion = useStore((s) => s.deleteQuestion);
  const [text, setText] = useState("");

  return (
    <div className="ml-4 mt-1">
      <div className="flex gap-2 mb-1">
        <input value={text} onChange={(e) => setText(e.target.value)} className="border p-1 rounded text-sm" />
        <button onClick={() => { addQuestion(topicId, sub.id, text); setText(""); }} className="bg-green-500 text-white px-2 rounded text-sm">Add</button>
      </div>

      <ul className="space-y-1 mt-2">
  {sub.questions.map((q) => (
    <li
      key={q.id}
      className="flex justify-between items-center bg-white px-2 py-1 rounded shadow-sm text-sm"
    >
      <span>{q.text}</span>

      <button
        onClick={() => deleteQuestion(topicId, sub.id, q.id)}
        className="text-red-500 text-xs"
      >
        Delete
      </button>
    </li>
  ))}
</ul>


    </div>
  );
}
