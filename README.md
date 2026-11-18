# PrepMate – AI-Powered Placement Preparation Platform

**Prepare. Practice. Perform.**

An AI-powered placement preparation platform designed to help students develop technical skills, improve interview readiness, analyze resumes, and organize their placement preparation journey in one place.

---

## 1. Project Overview

**PrepMate** is a web-based placement preparation platform that provides students with AI-powered tools and resources to prepare for campus placements and job interviews.

Students often use multiple platforms for resume evaluation, coding practice, interview preparation, aptitude learning, and career guidance. Managing these activities separately can make preparation difficult and unorganized.

PrepMate brings these preparation activities together through a centralized platform powered by Google Gemini AI.

The platform provides personalized preparation roadmaps, AI mock interviews, resume analysis, study planning, progress tracking, and an AI career assistant.

## 2. Problem Statement

Students preparing for placements commonly face challenges such as:

- Lack of structured placement preparation.
- Difficulty identifying resume weaknesses.
- Limited opportunities for interview practice.
- Lack of personalized learning guidance.
- Difficulty organizing study schedules.
- Limited awareness of preparation progress.
- Challenges in preparing for different company requirements.

PrepMate aims to address these challenges through an integrated AI-powered preparation environment.

## 3. Objectives

- Provide a centralized placement preparation platform.
- Help students evaluate and improve their resumes.
- Enable AI-assisted mock interview practice.
- Generate personalized learning roadmaps.
- Support coding and theory preparation.
- Provide structured study planning.
- Track student preparation progress.
- Offer AI-based career guidance.

## 4. Key Features

### 4.1 AI Resume Intelligence

- Upload resumes in PDF format.
- Analyze resumes using AI.
- Generate ATS compatibility scores.
- Extract skills, projects, and experience.
- Identify missing skills.
- Provide resume improvement suggestions.

### 4.2 AI Mock Interviews

- Generate interview questions based on role and technology.
- Support technical and behavioral interview preparation.
- Evaluate candidate answers using AI.
- Provide scores and detailed feedback.
- Suggest improvements and model answers.
- Maintain interview history.

### 4.3 AI Preparation Hub

- Generate personalized preparation roadmaps.
- Generate coding and theory questions.
- Support different difficulty levels.
- Provide company-oriented preparation.
- Include topic-based learning resources.
- Track preparation progress.

### 4.4 AI Career Coach

- AI-powered conversational assistance.
- Technical concept explanations.
- Coding and interview guidance.
- Resume improvement suggestions.
- Personalized preparation recommendations.
- Study plan generation.

### 4.5 Study Planner

- Generate personalized weekly study plans.
- Organize preparation tasks.
- Track task completion.
- Monitor study milestones.
- Maintain preparation progress.

### 4.6 Progress Dashboard

- View interview statistics.
- Track resume analysis scores.
- Monitor preparation progress.
- View experience level and XP.
- Track daily streaks and study hours.
- Access preparation modules through quick navigation.

### 4.7 Leaderboard and Gamification

- Track XP points.
- Monitor preparation streaks.
- View leaderboard rankings.
- Encourage consistent preparation.

### 4.8 Admin Dashboard

- View platform statistics.
- Manage registered users.
- Manage user roles.
- Delete user accounts.
- Broadcast notifications.
- Access administrative controls.

## 5. User Roles

### Student

Students can:

- Register and log in.
- Manage their profiles.
- Upload and analyze resumes.
- Practice AI mock interviews.
- Access preparation roadmaps.
- Generate study plans.
- Interact with the AI Career Coach.
- Track preparation progress.

### Administrator

Administrators can:

- Access the Admin Dashboard.
- View registered accounts.
- Monitor platform statistics.
- Manage student and administrator roles.
- Manage user accounts.
- Broadcast notifications.

## 6. Technology Stack

### Frontend

- React.js
- JavaScript
- Tailwind CSS
- Bootstrap Icons
- Axios
- React Router
- React Markdown

### Backend

- Node.js
- Express.js
- REST APIs
- JWT Authentication
- bcrypt.js
- Nodemailer

### Database

- MongoDB
- Mongoose

### Artificial Intelligence

- Google Gemini API

AI integration is used for:

- Resume analysis.
- Interview question generation.
- Interview answer evaluation.
- AI career assistance.
- Personalized preparation roadmaps.
- Quiz question generation.
- Study plan generation.

### Authentication and Security

- JSON Web Token (JWT).
- Password hashing using bcrypt.
- Role-based access control.
- Protected routes.
- Email verification.
- Password reset functionality.

## 7. System Architecture

PrepMate follows a MERN-based client-server architecture.

```text
              STUDENT / ADMIN
                     |
                     v
              REACT FRONTEND
                     |
                     v
              EXPRESS SERVER
                     |
          +----------+----------+
          |          |          |
          v          v          v
       MongoDB    Gemini AI   Authentication
       Database     API       and Security
                               (JWT / bcrypt)
```

The React frontend communicates with the Express backend through REST APIs. The backend interacts with MongoDB for data storage and Google Gemini AI for intelligent features.

## 8. Project Structure

```text
PrepMate/
│
├── client/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── context/
│       ├── hooks/
│       ├── pages/
│       ├── redux/
│       └── services/
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── uploads/
│
├── README.md
└── package.json files
```

## 9. Installation and Setup

### Prerequisites

Make sure the following are installed:

- Node.js and npm.
- MongoDB Atlas account or a local MongoDB instance.
- Google Gemini API key.
- Visual Studio Code (recommended).

### Step 1: Get the Project

Clone your team's PrepMate repository:

```bash
git clone <YOUR_PREPMATE_REPOSITORY_URL>
```

Navigate into the project directory:

```bash
cd PrepMate
```

### Step 2: Install Backend Dependencies

Open a terminal:

```bash
cd server
npm install
```

### Step 3: Configure Environment Variables

Create a `.env` file inside the `server` directory.

Add the following configuration:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

CLIENT_URL=http://localhost:3000

SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email
SMTP_PASS=your_email_app_password
SMTP_FROM=your_sender_email
```

Replace the placeholder values with your actual configuration.

**Important:** Never upload your `.env` file, API keys, database credentials, or JWT secrets to a public repository.

### Step 4: Start the Backend Server

From the `server` directory:

```bash
npm run dev
```

The backend server runs at:

```text
http://localhost:5000
```

### Step 5: Install Frontend Dependencies

Open a second terminal:

```bash
cd client
npm install
```

### Step 6: Start the Frontend

From the `client` directory:

```bash
npm start
```

The frontend application runs at:

```text
http://localhost:3000
```

### Step 7: Open PrepMate

Open your browser and visit:

```text
http://localhost:3000
```

The PrepMate application should now be accessible locally.

## 10. API Overview

The backend provides REST API endpoints organized into the following modules:

| API Route | Purpose |
|---|---|
| `/api/auth` | Registration, login and authentication |
| `/api/interviews` | Mock interview operations |
| `/api/resumes` | Resume analysis |
| `/api/users` | User profile management |
| `/api/ai` | AI Career Coach |
| `/api/preparation` | Preparation roadmaps and questions |
| `/api/study-plan` | Personalized study planning |
| `/api/analytics` | Progress and analytics |
| `/api/admin` | Administrative operations |

Backend health check:

```text
http://localhost:5000/api/health
```

## 11. Screenshots

Screenshots of the following modules can be added here:

- Landing Page
- Student Registration and Login
- Student Dashboard
- Resume Intelligence
- AI Mock Interview
- AI Career Coach
- AI Preparation Hub
- Study Planner
- Leaderboard and Analytics
- Admin Dashboard

## 12. Future Enhancements

The following improvements can be explored in future versions:

- Voice-based AI mock interviews.
- Video interview analysis.
- AI-powered resume builder.
- AI cover letter generation.
- LinkedIn profile evaluation.
- Personalized job recommendations.
- Real-time coding interview simulation.
- Mobile application.

## 13. Team Members

**Project Title:** PrepMate – AI-Powered Placement Preparation Platform

**Project Type:** Capstone Project

**Team Members:**

1. Chilukala Sai Architha - 2303A52220
2. Ankam Srichala - 2303A52435
3. Thumma Hasini - 2303A52076
4. Sooda Nidhi Kathyayini - 2303A52015

**Project Guide:** Kothapeta Deepthi mam

**Department:** Computer Science and Engineering

**Specialization:** Artificial Intelligence and Machine Learning

**Institution:** SR University

**Academic Year:** 2026–2027

---

## 14. Conclusion

PrepMate provides an integrated environment for students to prepare for placements through AI-assisted resume analysis, mock interviews, personalized learning roadmaps, study planning, and performance tracking.

By combining modern web technologies with generative AI, the platform aims to make placement preparation more structured, accessible, and effective.

---

**PREPARE. PRACTICE. PERFORM.**

*PrepMate – Your AI-Powered Placement Preparation Companion.*
