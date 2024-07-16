# 📝 Django-React To-Do App

<p align="center">
  <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="80" height="80" />
  <img src="https://techstack-generator.vercel.app/django-icon.svg" alt="icon" width="80" height="80" />
</p>

Eine moderne To-Do-App mit Django und React. Diese App ermöglicht das Erstellen, Bearbeiten und Löschen von Aufgaben und bietet eine benutzerfreundliche Oberfläche und ein effizientes Backend.

## 📑 Inhalt
- [📸 Demo](#demo)
- [✨ Features](#features)
- [⚙️ Installation](#installation)
- [🚀 Verwendung](#verwendung)
- [🔌 API Endpoints](#api-endpoints)
- [🛠️ Technologien](#technologien)
- [🤝 Contributing](#contributing)
- [📄 Lizenz](#lizenz)

## 📸 Demo


## ✨ Features
- 🔐 Benutzerregistrierung und -anmeldung
- 📝 Aufgaben erstellen, bearbeiten und löschen
- ✅ Aufgaben als erledigt markieren
- 🔄 Echtzeit-Aktualisierungen
- 📱 Responsive Design

## ⚙️ Installation

### Voraussetzungen
- Python 3.x
- Node.js
- npm

### Backend (Django)
1. Repository klonen:
    ```sh
    git clone https://github.com/abdulrahim-ramadan/Django-React-ToDO-APP.git
    cd Django-React-ToDO-APP/backend
    ```
2. Virtuelle Umgebung erstellen und aktivieren:
    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```
3. Abhängigkeiten installieren:
    ```sh
    pip install -r requirements.txt
    ```
4. Datenbankmigrationen ausführen:
    ```sh
    python manage.py migrate
    ```
5. Entwicklungsserver starten:
    ```sh
    python manage.py runserver
    ```

### Frontend (React)
1. In das Frontend-Verzeichnis wechseln:
    ```sh
    cd ../frontend
    ```
2. Abhängigkeiten installieren:
    ```sh
    npm install
    ```
3. Entwicklungsserver starten:
    ```sh
    npm start
    ```

## 🚀 Verwendung
1. Öffne deinen Browser und gehe zu `http://localhost:3000`.
2. Registriere dich oder melde dich an.
3. Beginne damit, deine Aufgaben zu verwalten.

## 🔌 API Endpoints
- `GET /api/tasks/` - Liste aller Aufgaben
- `POST /api/tasks/` - Neue Aufgabe erstellen
- `PUT /api/tasks/<id>/` - Aufgabe aktualisieren
- `DELETE /api/tasks/<id>/` - Aufgabe löschen

## 🛠️ Technologien
- **Backend:** Django, Django REST Framework
- **Frontend:** React, Redux
- **Datenbank:** SQLite (Standard), kann einfach auf PostgreSQL oder MySQL geändert werden

## 🤝 Contributing
Beiträge sind willkommen! Bitte erstelle ein Issue, um Fehler zu melden oder Features zu vorschlagen. Forke das Repository und erstelle einen Pull-Request für deine Änderungen.

## 📄 Lizenz
Dieses Projekt steht unter der MIT Lizenz. Siehe [LICENSE](LICENSE) für weitere Informationen.
