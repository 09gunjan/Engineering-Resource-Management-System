
Engineering Resource Management System (ERM)
============================================

A complete full-stack web application for managing engineers, projects, assignments, and capacity tracking.

Tech Stack
----------

Frontend:
- React + TypeScript
- TailwindCSS + ShadCN UI
- Zustand (state management)
- React Hook Form (form handling)
- Axios for API calls
- React Router DOM for routing

Backend:
- Node.js + Express
- Sequelize ORM + MySQL
- JWT Authentication
- RESTful API Architecture

Setup Instructions
------------------

1. Backend Setup

cd backend
cp .env.example .env           # Add your MySQL credentials
npm install
node seed/seed.js              # Seed sample data
npm run dev                    # Start backend on http://localhost:5000

2. Frontend Setup

cd frontend
npm install
npm run dev                    # Start frontend on http://localhost:5173

Features
--------

- JWT-based login system (Manager & Engineer roles)
- View and manage engineers
- Capacity tracking logic
- Create and assign projects
- Engineer dashboard with project roles
- Visual workload bars
- Responsive design using TailwindCSS

Sample Users (from Seed Data)
-----------------------------

Role     | Email               | Password
---------|---------------------|----------
Manager  | alice@example.com   | password123
Engineer | bob@example.com     | password123
Engineer | charlie@example.com | password123
Engineer | diana@example.com   | password123
Engineer | eva@example.com     | password123

Project Structure
-----------------

ERM/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── seed/
│   ├── app.js
│   ├── server.js
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── tsconfig.json
└── README.md


Seed Data Includes
------------------

- 4 engineers with various skills and capacity (full-time and part-time)
- 3 projects with different required skills and statuses
- 6+ assignments across different roles and capacities

Database Models
---------------

User:
{
  email: String,
  name: String,
  role: 'engineer' | 'manager',
  skills: [String],
  seniority: 'junior' | 'mid' | 'senior',
  maxCapacity: Number,
  department: String
}

Project:
{
  name: String,
  description: String,
  startDate: Date,
  endDate: Date,
  requiredSkills: [String],
  teamSize: Number,
  status: 'planning' | 'active' | 'completed',
  managerId: Integer
}

Assignment:
{
  engineerId: Integer,
  projectId: Integer,
  allocationPercentage: Number,
  startDate: Date,
  endDate: Date,
  role: String
}


API Endpoints
-------------

Authentication:
- POST /api/auth/login
- GET /api/auth/profile

Engineers:
- GET /api/engineers
- GET /api/engineers/:id/capacity

Projects:
- GET /api/projects
- POST /api/projects
- GET /api/projects/:id

Assignments:
- GET /api/assignments
- POST /api/assignments
- PUT /api/assignments/:id
- DELETE /api/assignments/:id


AI Tools & Assistance
---------------------

Which AI Tools Were Used and How

This project made use of ChatGPT (OpenAI) and Copilot as a coding assistant to help accelerate development across both frontend and backend. It was used to:
- Generate Express routes, Sequelize models, and seed data structure
- Configure TailwindCSS with React and ShadCN UI
- Create Zustand store examples for state management
- Solve CLI and setup issues in Cursor IDE

How AI Accelerated Development

Specific tasks where AI significantly improved development speed:
- Provided boilerplate code for authentication, routing, and controllers
- Generated consistent folder and file structures across backend and frontend
- Created ready-to-use UI components with TailwindCSS and ShadCN UI
- Accelerated debugging for TailwindCSS CLI errors in Windows environment

Challenges Faced With AI-Generated Code and How They Were Resolved

  - Resolved by reviewing official docs and manually integrating with project logic
- Tailwind CLI was not recognized in the terminal due to Windows PATH issues
  - Solved with AI-suggested alternative commands (npx tailwindcss, or using node_modules/.bin)

  - Fixed by understanding each interface and correcting the props or state types

Approach to Validating and Understanding AI Suggestions

- Every code suggestion from AI was verified against documentation from sources like:
  - TailwindCSS Docs
  - React + TypeScript Cheatsheets
  - Sequelize Documentation
- Code was tested manually in the IDE with breakpoints and console logs
- No AI-generated code was used blindly — changes were made to match project architecture and standards
- Ensured that all AI code output was fully understood before integrating