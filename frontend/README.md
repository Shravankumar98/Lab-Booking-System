# Frontend - React (Vite)

This is the frontend of the MERN application built with **React + Vite**.

## ✨ Features

* React functional components
* Fetch API for backend communication
* Vite fast development server
* Hooks: useState, useEffect

---

## 📦 Installation

```
npm install
```

---

## ▶️ Start Development Server

```
npm run dev
```

Runs on: `http://localhost:5173`

---

## 🔗 API Communication Example

```
useEffect(() => {
  fetch("http://localhost:3000/api/courses")
    .then(res => res.json())
    .then(console.log);
}, []);
```

Backend must allow CORS for:

```
http://localhost:5173
```

---

## 🏗 Production Build

```
npm run build
```
---

## 📁 Folder Structure

```
src/
 ├── components/
 ├── pages/
 ├── App.jsx
 ├── main.jsx
 └── styles/
```

---
