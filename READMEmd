# ✅ DevOps 3-Tier Todo App

A full 3-tier web application built and deployed with Docker, designed to practice real DevOps workflow: **Code → Build → Containerize → Deploy**.

> **Project Status:** Stage 1 Complete - Running locally with Docker Compose
> **Next Stage:** Deploy to AWS EC2 with Terraform + GitHub Actions CI/CD

---

## 🎯 What This Project Proves

This is not just a Todo app. It proves I can:
- Build a 3-tier architecture (Frontend, Backend, Database)
- Containerize services with Docker
- Orchestrate multi-container apps with Docker Compose
- Connect services with networking and environment variables
- Build a backend API connected to a real Postgres database


All 3 services run in separate Docker containers on the same Docker network.

| Tier | Technology | Port | Role |
| :--- | :--- | :--- | :--- |
| Frontend | HTML, CSS, JS + Nginx | 80 | User interface |
| Backend | Node.js + Express | 5000 | REST API |
| Database | PostgreSQL 15 | 5432 | Data storage |

---

 ## 📁 Folder Structure
devops-3tier-todo-app/
├── frontend/
│   ├── index.html
│   ├── app.js
│   └── Dockerfile
├── backend/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml
└── README.md


---

## ⚙️ Prerequisites

- Docker installed
- Docker Compose installed
- Git
- Node.js 18+ (only if you want to run backend without Docker)

Check if you have it:
```bash
docker --version
docker compose version

How To Run Locally
Clone the repo:
bash
git clone https://github.com/YOUR_USERNAME/devops-3tier-todo-app.git
cd devops-3tier-todo-app
Build and start all services:
bash
docker compose up --build
Open in your browser:
Frontend: localhost
Backend Health Check: localhost:5000
You should see {"status":"OK","service":"todo-backend"}
Test it:
Add a todo: Learn Terraform
Refresh page, it should still be there (data is saved in Postgres)
Delete it, it should disappear
Stop it:
bash
docker compose down
To delete data also:
bash
docker compose down -v

What I Learned
How frontend, backend and database talk to each other inside Docker
How to use depends_on and environment variables like DATABASE_URL
How to persist data with Docker volumes so todos don't disappear after restart
How to debug containers with docker logs and docker ps
Why localhost inside a container is different from localhost on my laptop - services must use service names like db not localhost