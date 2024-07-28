# 📝 Django-React To-Do App

<p align="center">
  <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="80" height="80" />
  <img src="https://techstack-generator.vercel.app/django-icon.svg" alt="icon" width="80" height="80" />
</p>

A modern to-do app built with Django and React. This app allows users to create, edit, and delete tasks while offering a user-friendly interface and efficient backend.

## 📑 Contents
- [📸 Demo](#demo)
- [✨ Features](#features)
- [⚙️ Installation](#installation)
- [🚀 Usage](#usage)
- [🔌 API Endpoints](#api-endpoints)
- [🛠️ Technologies](#technologies)
- [🤝 Contributing](#contributing)
- [📄 License](#license)

## 📸 Demo
![project demo](screenshot.png)

## ✨ Features
- 🔐 User registration and login
- 📝 Create, edit, and delete tasks
- ✅ Mark tasks as completed
- 🔄 Real-time updates
- 📱 Responsive design

## ⚙️ Installation

### Prerequisites
- Python 3.x
- Node.js
- npm

### Backend (Django)
1. Clone the repository:
    ```sh
    git clone https://github.com/abdulrahim-ramadan/Django-React-ToDO-APP.git
    cd Django-React-ToDO-APP/backend
    ```
2. Create and activate a virtual environment:
    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```
3. Install dependencies:
    ```sh
    pip install -r requirements.txt
    ```
4. Run database migrations:
    ```sh
    python manage.py migrate
    ```
5. Start the development server:
    ```sh
    python manage.py runserver
    ```

### Frontend (React)
1. Navigate to the frontend directory:
    ```sh
    cd ../frontend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the development server:
    ```sh
    npm start
    ```

## 🚀 Usage
1. Open your browser and go to `http://localhost:3000`.
2. Register or log in.
3. Start managing your tasks.

## 🔌 API Endpoints
- `GET /api/tasks/` - List all tasks
- `POST /api/tasks/` - Create a new task
- `PUT /api/tasks/<id>/` - Update a task
- `DELETE /api/tasks/<id>/` - Delete a task

## 🛠️ Technologies
- **Backend:** Django, Django REST Framework
- **Frontend:** React, Redux
- **Database:** SQLite (default), can be easily switched to PostgreSQL or MySQL

## 🤝 Contributing
Contributions are welcome! Please open an issue to report bugs or suggest features. Fork the repository and create a pull request for your changes.

## 📄 License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for more information.
