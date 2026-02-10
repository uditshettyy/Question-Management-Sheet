import { useEffect, useState } from "react";
import { useStore } from "./store/useQuestionStore";
import TopicList from "./components/TopicList";
import sheetData from "./data/sheet.json";
import { convertSheetToTopics } from "./utils/convertSheetData";
import Loader from "./components/Loader";

function App() {
  const addTopic = useStore((s) => s.addTopic);
  const setTopicsFromAPI = useStore((s) => s.setTopicsFromAPI);

  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    const existing = localStorage.getItem("question-manager-data");

    if (!existing) {
      try {
        const converted = convertSheetToTopics(sheetData);
        setTopicsFromAPI(converted);
      } catch (err) {
        console.error("Data load failed:", err);
      }
    }

    setTimeout(() => setLoading(false), 800);
  }, [setTopicsFromAPI]);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 transition-colors">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8">

        <div className="flex justify-end mb-4">
          <button
            onClick={() => setDark(!dark)}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white shadow hover:scale-105 transition"
          >
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <div className="w-full flex justify-center mb-14">
          <div className="flex flex-col items-center text-center">

            <div className="p-5 bg-gradient-to-r from-orange-600 to-orange-600 rounded-2xl shadow-lg mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3M14 4l-4 16" />
              </svg>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent">
              Question Management System
            </h1>

            <p className="text-sm md:text-base text-orange-500 dark:text-gray-400 mt-3 max-w-xl">
              Organize topics, subtopics, and coding questions — all in one place.
            </p>

          </div>
        </div>

        <div className="flex gap-3 mb-8">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="New topic"
            className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-2 rounded-lg w-full text-sm focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <button
            onClick={() => {
              if (!title) return;
              addTopic(title);
              setTitle("");
            }}
            className="px-5 py-2 bg-orange-600 text-white rounded-lg text-sm hover:bg-orange-700 transition"
          >
            Add
          </button>
        </div>

        <TopicList />
      </div>
    </div>
  );
}

export default App;
