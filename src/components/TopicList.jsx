import { useStore } from "../store/useQuestionStore";
import SubtopicList from "./SubtopicList";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import SortableTopic from "./SortableTopic";

export default function TopicList() {
  const topics = useStore((s) => s.topics);
  const reorderTopics = useStore((s) => s.reorderTopics);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = topics.findIndex((t) => t.id === active.id);
    const newIndex = topics.findIndex((t) => t.id === over.id);

    reorderTopics(arrayMove(topics, oldIndex, newIndex));
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={topics.map((t) => t.id)} strategy={verticalListSortingStrategy}>
        {topics.map((topic) => (
          <SortableTopic key={topic.id} topic={topic} />
        ))}
      </SortableContext>
    </DndContext>
  );
}

