import { create } from "zustand";
import { v4 as uuid } from "uuid";

const load = () => {
  try {
    const data = localStorage.getItem("question-manager-data");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const save = (topics) =>
  localStorage.setItem("question-manager-data", JSON.stringify(topics));

export const useStore = create((set) => ({
  topics: load(),

  setTopicsFromAPI: (topics) =>
    set(() => {
      save(topics);
      return { topics };
    }),

  addTopic: (title) =>
    set((state) => {
      const updated = [...state.topics, { id: uuid(), title, subtopics: [] }];
      save(updated);
      return { topics: updated };
    }),

  deleteTopic: (id) =>
    set((state) => {
      const updated = state.topics.filter((t) => t.id !== id);
      save(updated);
      return { topics: updated };
    }),

  editTopic: (id, newTitle) =>
    set((state) => {
      const updated = state.topics.map((t) =>
        t.id === id ? { ...t, title: newTitle } : t
      );
      save(updated);
      return { topics: updated };
    }),

  reorderTopics: (newOrder) =>
    set(() => {
      save(newOrder);
      return { topics: newOrder };
    }),

  addSubtopic: (topicId, title) =>
    set((state) => {
      const updated = state.topics.map((t) =>
        t.id === topicId
          ? { ...t, subtopics: [...t.subtopics, { id: uuid(), title, questions: [] }] }
          : t
      );
      save(updated);
      return { topics: updated };
    }),

  deleteSubtopic: (topicId, subId) =>
    set((state) => {
      const updated = state.topics.map((t) =>
        t.id === topicId
          ? { ...t, subtopics: t.subtopics.filter((s) => s.id !== subId) }
          : t
      );
      save(updated);
      return { topics: updated };
    }),

  editSubtopic: (topicId, subId, newTitle) =>
    set((state) => {
      const updated = state.topics.map((t) =>
        t.id === topicId
          ? {
              ...t,
              subtopics: t.subtopics.map((s) =>
                s.id === subId ? { ...s, title: newTitle } : s
              ),
            }
          : t
      );
      save(updated);
      return { topics: updated };
    }),

  reorderSubtopics: (topicId, newOrder) =>
    set((state) => {
      const updated = state.topics.map((t) =>
        t.id === topicId ? { ...t, subtopics: newOrder } : t
      );
      save(updated);
      return { topics: updated };
    }),

  addQuestion: (topicId, subId, text) =>
    set((state) => {
      const updated = state.topics.map((t) =>
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
      );
      save(updated);
      return { topics: updated };
    }),

  deleteQuestion: (topicId, subId, qId) =>
    set((state) => {
      const updated = state.topics.map((t) =>
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
      );
      save(updated);
      return { topics: updated };
    }),

  editQuestion: (topicId, subId, qId, newText) =>
    set((state) => {
      const updated = state.topics.map((t) =>
        t.id === topicId
          ? {
              ...t,
              subtopics: t.subtopics.map((s) =>
                s.id === subId
                  ? {
                      ...s,
                      questions: s.questions.map((q) =>
                        q.id === qId ? { ...q, text: newText } : q
                      ),
                    }
                  : s
              ),
            }
          : t
      );
      save(updated);
      return { topics: updated };
    }),

  reorderQuestions: (topicId, subId, newOrder) =>
    set((state) => {
      const updated = state.topics.map((t) =>
        t.id === topicId
          ? {
              ...t,
              subtopics: t.subtopics.map((s) =>
                s.id === subId ? { ...s, questions: newOrder } : s
              ),
            }
          : t
      );
      save(updated);
      return { topics: updated };
    }),
}));
