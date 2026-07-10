<div align="center">

# 🛡️ SurakshaAI

### AI-Driven Crime Analytics & Visualization Platform

**Datathon 2026 | Challenge 02**

Transforming crime datasets into actionable intelligence using Artificial Intelligence, Machine Learning and Zoho Catalyst.

![Python](https://img.shields.io/badge/Python-3.9-blue?logo=python)
![Flask](https://img.shields.io/badge/Flask-Backend-black)
![Zoho Catalyst](https://img.shields.io/badge/Zoho-Catalyst-red)
![License](https://img.shields.io/badge/License-MIT-success)
![Status](https://img.shields.io/badge/Status-Active-success)

</div>

---

# 📌 Overview

SurakshaAI is an AI-powered crime analytics platform built for **Datathon 2026 Challenge 02**.

The platform processes multiple Indian crime datasets, computes a multi-dimensional crime risk score, exposes REST APIs, and provides interactive analytics for crime trend monitoring and decision support.

Unlike traditional dashboards, SurakshaAI combines data engineering, analytics and AI to help authorities identify high-risk regions and understand crime patterns.

---

# ✨ Key Features

## ✅ Implemented

- 📊 Unified processing of 14+ crime datasets
- ⚡ Flask REST API
- 📈 State-wise Risk Score (0–100)
- 📍 Historical Crime Trend Analysis
- 📊 Six-Dimensional Composite Risk Score
- 🖥️ Interactive Streamlit Dashboard
- 📄 CLI Report Generator
- 🔄 Automatic Dataset Loader
- ☁️ Zoho Catalyst Integration

---

## 🚧 Upcoming

- 🤖 AI Prediction using Zia AutoML
- 🔥 Interactive Heatmaps
- 🌐 Criminal Network Analysis
- 📄 Smart PDF Reports
- 🔍 OCR-based FIR Processing
- 🚨 Real-Time Alerts
- 🔐 Authentication & RBAC

---

# 🏗 System Architecture

```text
                  User
                    │
                    ▼
          Streamlit Dashboard
                    │
          Flask REST API Server
                    │
       ┌────────────┴────────────┐
       │                         │
 Crime Analytics Engine      CLI Reports
       │
       ▼
Dataset Loader (14 CSV Files)
       │
       ▼
Composite Risk Engine
       │
       ▼
Zoho Catalyst Services
```

---

# 📊 Composite Risk Score

SurakshaAI calculates a **0–100 Composite Risk Score** based on six major dimensions:

| Dimension | Description |
|------------|-------------|
| 🚔 Police Complaints | Complaints & accountability |
| 🔪 Violent Crime | Murder, rape, kidnapping |
| 💰 Property Crime | Theft, fraud, robbery |
| ⚖ Judicial Efficiency | Court trial performance |
| 📋 System Backlog | Pending investigations |
| 👩 Women's Safety | Crimes against women |

---

# 📂 Project Structure

```text
SurakshaAI/
│
├── cli/
├── data/
├── datasets/
│   ├── 25_Complaints_against_police.csv
│   ├── ...
│   └── 43_Arrests_under_crime_against_women.csv
│
├── functions/
│   └── crime_api/
│       ├── main.py
│       ├── test.py
│       └── risk.py
│
├── streamlit_dashboard.py
├── requirements.txt
├── catalyst.json
├── README.md
└── .gitignore
```

---

# 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Language | Python 3.9 |
| Backend | Flask |
| Dashboard | Streamlit |
| Data Processing | CSV |
| Data Analysis | Pandas |
| Cloud | Zoho Catalyst |
| Version Control | Git & GitHub |

---

# 📥 Installation

```bash
git clone https://github.com/<username>/SurakshaAI.git

cd SurakshaAI

python -m venv venv

pip install -r requirements.txt
```

---

# 🚀 Running the Project

## Start Flask API

```bash
cd functions/crime_api

python main.py
```

Server

```
http://127.0.0.1:5000
```

---

## Launch Dashboard

```bash
streamlit run streamlit_dashboard.py
```

---

# 📡 API Endpoints

| Endpoint | Description |
|-----------|-------------|
| `/hello` | Health Check |
| `/risk/<state>` | Composite Risk Score |
| `/states` | List States |
| `/breakdown/<state>` | Crime Breakdown |
| `/trends/<state>` | Historical Trend |
| `/compare` | Compare States |
| `/top-risky` | Top Risky States |

---

# 💻 CLI Examples

```bash
python test.py --state Maharashtra

python test.py --state Maharashtra --year 2014

python test.py --dimensions

python test.py --list-states
```

---

# 📊 Sample Response

```json
{
    "state":"Maharashtra",
    "risk_score":63.72,
    "risk_level":"HIGH",
    "trend":"Increasing"
}
```

---

# 📈 Roadmap

- ✅ Risk Engine
- ✅ REST APIs
- ✅ Dashboard
- ✅ CLI Reports
- 🔄 AI Prediction
- 🔄 Heatmaps
- 🔄 OCR
- 🔄 PDF Reports
- 🔄 Network Analysis

---

# 📸 Screenshots

> Add screenshots here

```
screenshots/
│
├── dashboard.png
├── risk-score.png
├── trends.png
├── api.png
```

---

# 🤝 Contributors

| Name | Role |
|------|------|
| SohamFE23 | Backend & Data Processing |
| Parth Wakodkar | Frontend |
| Xmanish8 | AI/ML, Analytics & Zoho Catalyst Integration |

---

# ⭐ Support

If you found this project useful

⭐ Star the repository

🍴 Fork it

🛠 Contribute

---

# 📜 License

Developed for **Datathon 2026 Challenge 02**

Educational & Research Purposes.

---

<div align="center">

## 🛡️ SurakshaAI

### **Predict • Analyze • Prevent**

Built with ❤️ using Python • Flask • Streamlit • Zoho Catalyst

</div>
