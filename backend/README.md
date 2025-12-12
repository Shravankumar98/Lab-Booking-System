# Backend - Express API

This is the backend service for the MERN application built with **Node.js + Express**.

## 🚀 Features

* REST API routes
* In-memory or MongoDB database
* CORS enabled

---

## 📦 Installation

```
npm install
```

---

## ▶️ Running the Server

### Development

```
npm run dev
```

### Production

```
npm start
```

Runs at: `http://localhost:3000`

---

## 🔧 Example API Endpoints

| Method | Endpoint                         | Description          |
| ------ | ----------------                 | ---------------      |
| GET    | /api/courses                     | Get all courses      |
| GET    | /api/course/:id                  | Get course           |
| POST   | /api/lessons/{lessonId}/complete | Update course        |
| GET    | /api/courses/:id                 | Get courseProgress   |

---

## ⚙ CORS Configuration

```
import cors from "cors";
app.use(cors({ origin: "http://localhost:5173" }));
```

---
