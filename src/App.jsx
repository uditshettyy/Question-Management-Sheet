import { useState } from "react";
import { useStore } from "./store/useQuestionStore";
import TopicList from "./components/TopicList";

function App() {
  const addTopic = useStore((s) => s.addTopic);
  const [title, setTitle] = useState("");

  return (
  <div className="bg-white-500 text-black text-2xl p-1 flex justify-center">
    <div className="w-full max-w-2xl p-6">
      <h1 className="text-2xl font-bold mb-4">Question Manager</h1>

      {/* Add Topic Section */}
      <div className="flex gap-2 mb-6">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New topic"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={() => {
            if (!title) return;
            addTopic(title);
            setTitle("");
          }}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      {/* Topics */}
      <TopicList />
    </div>
  </div>
);
}
export default App;
