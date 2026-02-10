# 📘 Question Management System


A **modern React-based Question Organizer** designed to manage coding topics, subtopics, and questions in a structured and interactive way.

Built as part of a full-stack internship assignment, this project demonstrates **state management, dynamic UI rendering, and drag-and-drop architecture** in a scalable way.

---

## 🚀 Live Demo

🔗 https://question-management-sheet-xi.vercel.app/

---

## ✨ Key Features

| Feature                 | Description                            |
| ----------------------- | -------------------------------------- |
| 🧠 Topic Management     | Add, edit, and delete coding topics    |
| 🗂 Subtopic Structure   | Organize learning paths clearly        |
| ❓ Question Handling     | Manage coding questions efficiently    |
| 🔄 Drag & Drop          | Smooth reordering using dnd-kit        |
| 📂 Collapsible Sections | Expand/Collapse topic trees            |
| 🌙 Dark Mode            | Modern developer-friendly UI           |
| ⏳ Loading Screen        | Better user experience                 |
| 💾 State Persistence    | Powered by Zustand                     |
| 📱 Responsive Design    | Works across devices                   |
| 📊 Local Dataset        | Structured sheet-based data conversion |

---

## 🛠 Tech Stack

| Technology       | Role                    |
| ---------------- | ----------------------- |
| **React (Vite)** | Frontend Framework      |
| **Tailwind CSS** | Styling                 |
| **Zustand**      | Global State Management |
| **dnd-kit**      | Drag & Drop System      |
| **Vercel**       | Deployment              |

---

## 🧩 System Architecture

```text
Topic
 ├── Subtopic
 │     ├── Question
 │     ├── Question
 │
 ├── Subtopic
       ├── Question
```

Each level supports:

✔ CRUD Operations
✔ Dynamic Reordering
✔ Expand/Collapse UI
✔ Global State Sync

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── TopicList.jsx
│   ├── SortableTopic.jsx
│   ├── SortableSubtopic.jsx
│   ├── SortableQuestion.jsx
│   ├── Loader.jsx
│
├── store/
│   └── useQuestionStore.js
│
├── utils/
│   └── convertSheetData.js
│
├── data/
│   └── sheet.json
│
└── App.jsx
```

---

## 🧠 How It Works

The app converts structured sheet data into a **hierarchical tree**:

**Topic → Subtopic → Questions**

Zustand handles centralized state while **dnd-kit** manages drag-drop operations without performance lag.

---

## 🧩 Installation

```bash
git clone https://github.com/YOUR_USERNAME/question-manager.git
cd question-manager
npm install
npm run dev
```

---

## 📦 Build

```bash
npm run build
```

---

## 🌍 Deployment

Hosted on **Vercel** for fast and scalable delivery.

---

## 🎯 Assignment Requirements Coverage

| Requirement            | Status |
| ---------------------- | ------ |
| Add Topic              | ✅      |
| Add Subtopic           | ✅      |
| Add Question           | ✅      |
| Edit/Delete            | ✅      |
| Drag & Drop Reordering | ✅      |
| State Management       | ✅      |
| Dataset Integration    | ✅      |
| Responsive UI          | ✅      |

---

## 💡 Future Improvements

🔐 Backend Database
👤 User Authentication
🔗 Shareable Lists
🔍 Search & Filtering
📱 Mobile-First Enhancements

---

## 👨‍💻 Author

**Udit Shetty**
Aspiring Developer 🚀

