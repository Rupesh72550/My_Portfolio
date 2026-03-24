# 🚀 Java Full Stack Developer Portfolio

## 📖 Project Description
A sleek, modern, and fully responsive personal portfolio website developed to showcase skills, experience, projects, and achievements. It features a complete end-to-end full-stack architecture with a React frontend, smooth animations using Framer Motion, and a Node.js/Express backend that securely saves contact form submissions directly into a MongoDB database.

## ✨ Features
* **Modern & Responsive UI:** Designed with fully custom CSS Modules, ensuring a responsive layout across all mobile, tablet, and desktop devices.
* **Smooth Animations:** Integrated with Framer Motion for premium scroll reveals and seamless entry animations.
* **Functional Contact Form:** End-to-end working form that captures user details, validates them securely on the server-side, and stores them in MongoDB.
* **Robust Backend API:** RESTful API built with Express.js, featuring strict Mongoose schema validation, structured controllers, and CORS protection.

## 🛠️ Tech Stack
**Frontend:**
* React.js (Functional Components & Hooks)
* Vite (Next-generation frontend tooling)
* Framer Motion (Declarative animations)
* CSS Modules & Vanilla CSS (Component-scoped styling)

**Backend:**
* Node.js (Runtime environment)
* Express.js (Web framework for REST APIs, Middleware, CORS)

**Database:**
* MongoDB Atlas (Cloud NoSQL Database)
* Mongoose (Object Data Modeling & Schema Validation)

## ⚙️ Installation & Setup Instructions

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and [Git](https://git-scm.com/) installed on your local machine. You will also need a MongoDB Connection URI to connect to your database.

### 1. Clone the repository
```bash
git clone <your-github-repo-url>
cd portfolio
```

### 2. Setup the Backend
Open a new terminal and navigate to the backend folder to install dependencies:
```bash
cd backend
npm install
```

### 3. Setup the Frontend
Open another terminal at the root of the project to install frontend dependencies:
```bash
npm install
```

## 🔐 Environment Variables
You need to configure the environment variables for the backend to securely connect to MongoDB.

1. Navigate to the `backend/` directory.
2. Rename the `.env.example` file to `.env`.
3. Open `.env` and fill in the following variables:

```env
PORT=5000
# Your exact MongoDB Atlas Connection String
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
```

## 📂 Project Structure
```text
portfolio/
├── backend/                  # Node.js/Express Backend Ecosystem
│   ├── controllers/          # Business logic and request handling (contactController.js)
│   ├── models/               # Mongoose database schemas (Contact.js)
│   ├── routes/               # Express API endpoints (contactRoutes.js)
│   ├── .env                  # Environment secrets (hidden from Git)
│   └── server.js             # Main backend application entry point
│
├── src/                      # React Frontend Ecosystem
│   ├── assets/               # Images, icons, and static files
│   ├── components/           # Reusable UI blocks (Hero, About, Contact, Navbar, etc.)
│   ├── App.jsx               # Main React Application tree
│   └── index.css             # Global modern styling conventions
│
├── index.html                # Entry HTML point
├── package.json              # Frontend scripting and dependencies
└── vite.config.js            # Vite build configuration
```

## 🚀 Usage Instructions
To run the full stack project locally, you need to run both the backend API and frontend dev servers simultaneously.

**1. Start the Backend Server:**
Open a terminal in the `backend/` folder:
```bash
cd backend
node server.js
```
*(You should see logs indicating the server is running on `http://localhost:5000` and MongoDB is connected)*

**2. Start the Frontend Server:**
Open a separate terminal in the root `portfolio/` folder:
```bash
npm run dev
```
*(Runs securely on `http://localhost:5173`)*

Open your browser and navigate to the Local UI link provided by Vite to view and interact with the application locally.

## 📡 API Endpoints

### Contact Form APIs
* **`POST /api/contact`**
  * **Description:** Submits a new message from the contact form, validates the inputs, and saves it to the database.
  * **Payload Expected:**
    ```json
    {
      "name": "Jane Doe",
      "email": "jane@example.com",
      "message": "Hello, I'd like to work with you!"
    }
    ```
  * **Success Response (201 Created):**
    ```json
    {
      "success": true, 
      "message": "Message sent successfully!",
      "data": { ... }
    }
    ```
  * **Error Response (400 Bad Request):**
    ```json
    {
      "success": false, 
      "message": "Please enter a valid email address"
    }
    ```

## 📸 Screenshots

*(Replace the placeholder links below with actual images of your website!)*

### Home Page
![Home Page Placeholder](https://via.placeholder.com/1000x500?text=Home+Page+Screenshot)

### Working Contact Form
![Contact Form Placeholder](https://via.placeholder.com/1000x500?text=Contact+Form+Validation+Screenshot)

## 🔮 Future Improvements
- [ ] Add a secure Admin Dashboard backend route to view and manage contact messages visually.
- [ ] Incorporate an automated Email Notification system using NodeMailer upon form submission.
- [ ] Build a headless CMS for dynamically adding new projects without editing the frontend code.

## 👤 Author / Contact Information
**Rupesh kumar Gupta**
* **Role:** Java Full Stack Developer
* **Email:** [rupesh281255@gmail.com](mailto:rupesh281255@gmail.com)
* **GitHub:** [https://github.com/Rupesh72550](https://github.com/Rupesh72550)
* **LinkedIn:** *(Add your LinkedIn Profile URL)*
