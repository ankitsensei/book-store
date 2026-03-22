# 📚 Book List CRUD Web App

A simple full-stack CRUD (Create, Read, Update, Delete) web application for managing a collection of books. This app allows users to store and manage book details including title, author, publish year, and a book cover image.

---

## 🚀 Features

* ➕ Add a new book with details and image
* 📖 View a list of all books
* ✏️ Edit existing book information
* ❌ Delete a book
* 🖼️ Upload and preview book cover images
* 🔄 Real-time updates with smooth UI feedback

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios (for API requests)
* React Router (for navigation)
* Notistack (for notifications)
* Tailwind CSS (for styling)

### Backend

* Node.js
* Express.js
* MongoDB (for database)
* Mongoose (ODM)
* Multer (for image upload handling)

---

## 📂 Project Structure

```
project-root/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   └── App.js
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/ankitsensei/book-store.git
cd book-store
```

---

### 2. Setup Backend

```
cd backend
npm install
npm start
```

Server runs on: `http://localhost:5555`

---

### 3. Setup Frontend

```
cd frontend
npm install
npm run dev
```

App runs on: `http://localhost:5173`

---

## 📡 API Endpoints

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| GET    | `/books`             | Get all books     |
| GET    | `/books/details/:id` | Get single book   |
| POST   | `/books/create`      | Create a new book |
| PUT    | `/books/edit/:id`    | Update a book     |
| DELETE | `/books/delete/:id`  | Delete a book     |

---

## 🖼️ Image Handling

* Images are uploaded using **Multer**
* Stored as Base64 or file (depending on implementation)
* Preview available before upload
* Existing images are preserved unless replaced

---

## 🧠 How It Works

1. User fills in book details
2. Data is sent via Axios to backend API
3. Backend processes request and interacts with MongoDB
4. Response is sent back and UI updates accordingly

---

<!-- ## 📸 Screenshots

*Add screenshots here (optional)* -->

---

## ❗ Known Issues / Improvements

* Add pagination for large datasets
* Improve image storage (e.g., Cloud storage like AWS S3 / Cloudinary)
* Add authentication (login/signup)
* Add search and filter functionality

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

---

<!-- ## 📄 License

This project is open-source and available under the MIT License.

--- -->

## 🙌 Acknowledgements

* React Documentation
* Express & Node.js Community
* MongoDB Docs

---

## 👨‍💻 Author

Your Name
GitHub: [https://github.com/ankitsensei](https://github.com/ankitsensei)

---

⭐ If you like this project, don’t forget to give it a star!
