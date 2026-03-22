Set-Content README.md @"
# StudyOS 📚

A full-stack personal academic management system built for CSE students.
Manage exams, assignments, notes, BCS prep, study sessions, and AI assistance — all in one place.

## Features

- Dashboard — live stats, exam countdowns, today's schedule
- Exams — countdown timers, syllabus progress tracking
- Assignments — Kanban board (To Do → In Progress → Done)
- BCS Prep — topic tracker, AI quiz, previous year questions
- Notes — rich text editor with AI summary and flashcards
- Planner — weekly timetable + Pomodoro timer
- AI Assistant — multi-turn chat with subject context
- Analytics — study hours, subject breakdown, quiz performance
- File Workspace — code editor, spreadsheet, document editor
- Resources — saved YouTube, Drive, and web links

## Tech Stack

### Frontend
- React 18 + Vite
- Bootstrap 5
- React Router v6
- Zustand (state management)
- TanStack Query (server state)
- Axios (HTTP client)
- Recharts (charts)
- Tiptap (rich text editor)
- Monaco Editor (code editor)

### Backend (coming soon)
- FastAPI (Python)
- PostgreSQL via Supabase
- JWT + Google OAuth
- Groq API (Llama 3.1 70B)

## Getting Started

### Prerequisites
- Node.js installed
- npm installed

### Run locally

cd frontend
npm install
npm run dev

Open http://localhost:5173

## Project Status

🚧 In active development — Frontend Phase in progress

## Author

Pranto — CSE Student, Dhaka, Bangladesh
GitHub: https://github.com/MdPrantoSikder
"@
