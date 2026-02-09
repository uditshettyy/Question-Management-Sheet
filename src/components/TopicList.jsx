import { useStore } from "../store/useQuestionStore";
import SubtopicList from "./SubtopicList";

export default function TopicList() {
  const topics = useStore((s) => s.topics);
  const deleteTopic = useStore((s) => s.deleteTopic);

  return topics.map((topic) => (
    <div key={topic.id} className="bg-white rounded-xl shadow p-4 mb-4">
  <div className="flex justify-between items-center border-b pb-2 mb-2">
    <h2 className="text-lg font-semibold">{topic.title}</h2>
    <button className="text-red-500 text-sm">Delete</button>
  </div>

  <SubtopicList topic={topic} />
</div>

  ));
}
