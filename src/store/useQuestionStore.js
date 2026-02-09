import { create } from "zustand";
import { v4 as uuid } from "uuid";

export const useStore = create((set) => ({
  topics: [],

  addTopic: (title) =>
    set((state) => ({
      topics: [...state.topics, { id: uuid(), title, subtopics: [] }],
    })),

  deleteTopic: (id) =>
    set((state) => ({ topics: state.topics.filter((t) => t.id !== id) })),

  addSubtopic: (topicId, title) =>
    set((state) => ({
      topics: state.topics.map((t) =>
        t.id === topicId
          ? { ...t, subtopics: [...t.subtopics, { id: uuid(), title, questions: [] }] }
          : t
      ),
    })),

  deleteSubtopic: (topicId, subId) =>
    set((state) => ({
      topics: state.topics.map((t) =>
        t.id === topicId
          ? { ...t, subtopics: t.subtopics.filter((s) => s.id !== subId) }
          : t
      ),
    })),

  addQuestion: (topicId, subId, text) =>
    set((state) => ({
      topics: state.topics.map((t) =>
        t.id === topicId
          ? {
              ...t,
              subtopics: t.subtopics.map((s) =>
                s.id === subId
                  ? { ...s, questions: [...s.questions, { id: uuid(), text }] }
                  : s
              ),
            }
          : t
      ),
    })),

  deleteQuestion: (topicId, subId, qId) =>
    set((state) => ({
      topics: state.topics.map((t) =>
        t.id === topicId
          ? {
              ...t,
              subtopics: t.subtopics.map((s) =>
                s.id === subId
                  ? { ...s, questions: s.questions.filter((q) => q.id !== qId) }
                  : s
              ),
            }
          : t
      ),
    })),
}));
