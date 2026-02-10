📘 Question Management System

A modern React-based Question Organizer that allows users to manage coding topics, subtopics, and questions in an interactive and structured way.

Built as part of a full-stack internship assignment.

🚀 Live Demo

(Add your Vercel link here after deployment)

✨ Features

✔ Add / Edit / Delete Topics
✔ Add / Edit / Delete Subtopics
✔ Add / Edit / Delete Questions
✔ Drag & Drop Reordering
✔ Collapsible Topic Sections
✔ Dark Mode 🌙
✔ Loading Screen
✔ Local Dataset Integration
✔ Clean Responsive UI
✔ State persistence using Zustand

🛠 Tech Stack
Technology	Purpose
React (Vite)	Frontend Framework
Tailwind CSS	UI Styling
Zustand	State Management
dnd-kit	Drag & Drop
Vercel	Deployment
📂 Project Structure
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

🧠 How It Works

The system converts a structured dataset into:

Topic → Subtopic → Questions


Each level supports:

CRUD operations

Reordering

Expand/Collapse UI

State is managed globally via Zustand.

🧩 Installation
git clone https://github.com/YOUR_USERNAME/question-manager.git
cd question-manager
npm install
npm run dev

📦 Build
npm run build

🌍 Deployment

Deployed using Vercel
🎯 Assignment Coverage
Requirement	Status
Add Topic	✅
Add Subtopic	✅
Add Question	✅
Edit/Delete	✅
Reorder (Drag & Drop)	✅
State Management	✅
API / Dataset Integration	✅
Responsive UI	✅
📸 UI Preview

(Add screenshots later if you want)

💡 Future Improvements

Backend storage

User authentication

Shareable lists

Search & filtering

Mobile-first enhancements

👨‍💻 Author

Udit Shetty
Aspiring Developer 🚀