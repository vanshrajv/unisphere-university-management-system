# 🎓 UniSphere – University Management System

UniSphere is a modern and responsive **University Management System** built completely with **React.js**.

The project provides separate experiences for **Students and Administrators**, allowing users to manage academic information through a professional dashboard.

---

## 🚀 Features

### 🔐 Authentication

- Student Login
- Admin Login
- Logout functionality
- Role-based dashboard
- Demo authentication
- Protected application experience

---

### 👨‍🎓 Student Management

- View all students
- Student profiles
- Student department
- Course information
- Semester information
- Search students
- Student details

Example students include:

- Vansh Raj – B.Tech CSE AIML – 5th Semester
- Anuvansh Bhardwaj – B.Tech CSE AIML – 5th Semester
- Vanshika Sharma – B.Tech CSE AIML – 5th Semester
- Students from different departments

---

### 👨‍🏫 Faculty Management

- Faculty directory
- Faculty profiles
- Faculty department
- Faculty designation
- Faculty courses
- Faculty contact information
- View profile functionality

---

### 📚 Course Management

- Course listing
- Course code
- Course name
- Department
- Semester
- Faculty assignment
- Course credits

---

### 📊 Dashboard

The dashboard provides an overview of:

- Total Students
- Total Faculty
- Total Courses
- Attendance
- Pending Fees
- Upcoming Exams
- Recent Notices

---

### 📅 Attendance

Students can view:

- Subject
- Total Classes
- Present Classes
- Absent Classes
- Attendance percentage

---

### 💰 Fees Management

Features include:

- Total fees
- Paid fees
- Pending fees
- Payment status
- Fee details

---

### 🗓️ Timetable

Students can view their weekly timetable including:

- Day
- Time
- Subject
- Faculty
- Room

---

### 📝 Exams

Exam information includes:

- Exam name
- Subject
- Date
- Time
- Room
- Exam status

---

### 🏆 Results

Students can view:

- Subject
- Marks
- Grade
- Credits
- SGPA
- Overall performance

---

### 📢 Notices

University notices include:

- Notice title
- Description
- Date
- Category
- Priority

---

### 👤 Profile

Users can view their:

- Name
- Email
- Department
- Course
- Semester
- Student ID
- Contact information

---

### 🎨 Theme Support

UniSphere includes theme functionality through React Context.

Users can switch between supported application themes without changing the project structure.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| React.js | Frontend |
| JavaScript | Application logic |
| JSX | UI components |
| CSS3 | Styling |
| Vite | Development server |
| React Context API | Global state |
| Local Data | Demo data management |

---

## 📁 Project Structure

```text
unisphere/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StatCard.jsx
│   │   ├── Modal.jsx
│   │   └── Table.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Students.jsx
│   │   ├── Faculty.jsx
│   │   ├── Courses.jsx
│   │   ├── Attendance.jsx
│   │   ├── Fees.jsx
│   │   ├── Timetable.jsx
│   │   ├── Exams.jsx
│   │   ├── Results.jsx
│   │   └── Notices.jsx
│   │
│   ├── data/
│   │   ├── students.js
│   │   ├── faculty.js
│   │   ├── courses.js
│   │   └── notices.js
│   │
│   ├── context/
│   │   └── ThemeContext.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── README.md
