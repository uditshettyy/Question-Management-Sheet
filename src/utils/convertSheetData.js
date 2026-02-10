import { v4 as uuid } from "uuid";

export const convertSheetToTopics = (sheet) => {
  const rawQuestions = sheet?.data?.questions || [];
  const topicMap = {};

  rawQuestions.forEach((q) => {
    const topicName = q.topic || "General";
    const subName = q.subTopic || "Misc";
    const questionText =
      q.title ||
      q.questionId?.name ||
      "Untitled Question";

    if (!topicMap[topicName]) {
      topicMap[topicName] = {
        id: uuid(),
        title: topicName,
        subtopics: [],
      };
    }

    let topic = topicMap[topicName];

    let sub = topic.subtopics.find((s) => s.title === subName);
    if (!sub) {
      sub = { id: uuid(), title: subName, questions: [] };
      topic.subtopics.push(sub);
    }

    sub.questions.push({ id: uuid(), text: questionText });
  });

  return Object.values(topicMap);
};
