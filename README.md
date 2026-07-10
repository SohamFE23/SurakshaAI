<div align="center">

# 🛡️ SurakshaAI

### AI-Driven Crime Analytics & Visualization Platform

**Datathon 2026 | Challenge 02**

Transforming crime data into actionable intelligence using Artificial Intelligence, Machine Learning and Zoho Catalyst.

![Python](https://img.shields.io/badge/Python-3.9-blue?logo=python)
![Flask](https://img.shields.io/badge/Flask-Backend-black)
![Streamlit](https://img.shields.io/badge/Streamlit-Dashboard-FF4B4B?logo=streamlit)
![Zoho Catalyst](https://img.shields.io/badge/Zoho-Catalyst-red)
![License](https://img.shields.io/badge/License-MIT-success)
![Status](https://img.shields.io/badge/Status-Active-success)

---

**Predict • Analyze • Prevent**

</div>

---

# 📌 Overview

SurakshaAI is an AI-powered crime analytics platform developed for **Datathon 2026 Challenge 02**.

The platform transforms historical crime datasets into meaningful insights through interactive dashboards, AI-driven risk scoring, geospatial hotspot visualization and automated analytics.

Instead of only displaying historical records, SurakshaAI aims to assist law enforcement agencies with proactive decision-making using Artificial Intelligence.

---

# 🚀 Features

## ✅ Implemented

- 📊 Interactive Streamlit Dashboard
- 📍 State-wise Crime Risk Analysis
- 📈 Historical Crime Trend Analysis
- 🔥 Crime Hotspot Visualization
- ⚡ Flask REST APIs
- ☁️ Zoho Catalyst Backend Integration
- 📂 CSV Dataset Processing
- 📑 Automated Summary Report

---

## 🚧 Planned

- 🤖 AI Crime Prediction using Zia AutoML
- 🌐 Criminal Network Analysis
- 📄 Smart PDF Report Generator
- 🔍 OCR-based FIR Processing
- 🔐 Authentication
- 🚨 Real-time Alerts
- 📱 React Dashboard
- ☁️ Full Catalyst Deployment

---

# 🏗️ System Architecture

```text
                +----------------------+
                |  Streamlit Dashboard |
                +----------+-----------+
                           |
                    Flask REST APIs
                           |
               Zoho Catalyst Functions
                           |
        +--------------------------------+
        |      Analytics Engine          |
        |   Risk Score | Reports | AI    |
        +--------------------------------+
                           |
      +---------------------------------------+
      | Crime Dataset | Data Store | AutoML   |
      +---------------------------------------+
```

---

# 🛠️ Technology Stack

| Category | Technologies |
|----------|--------------|
| Language | Python 3.9 |
| Backend | Flask |
| Dashboard | Streamlit |
| Data Analysis | Pandas, NumPy |
| Visualization | Plotly, Matplotlib |
| Machine Learning | Scikit-Learn, Zia AutoML *(planned)* |
| Cloud | Zoho Catalyst |
| Database | Catalyst Data Store |
| Version Control | Git & GitHub |

---

# 📂 Project Structure

```text
SurakshaAI
│
├── cli/
├── data/
├── datasets/
│   └── rajanand/
│       └── crime-in-india/
│
├── functions/
│   └── crime_api/
│
├── streamlit_dashboard.py
├── catalyst.json
├── requirements.txt
├── README.md
├── Report.txt
└── 25_Complaints_against_police.csv
```

---

# 📊 Dashboard

The dashboard provides

- Crime Statistics
- State Comparison
- Risk Score
- Trend Analysis
- Visual Charts
- Interactive Insights

---

# 🤖 AI Pipeline

```text
Crime Dataset
      │
      ▼
Data Cleaning
      │
      ▼
Feature Engineering
      │
      ▼
Risk Score Calculation
      │
      ▼
Prediction Engine
      │
      ▼
Dashboard & Reports
```

---

# 📡 REST API

## Get Risk Score

```http
GET /risk/<state>
```

Example

```http
GET /risk/Delhi
```

Response

```json
{
  "state":"Delhi",
  "risk_rate":84.5,
  "no_of_cases":213
}
```

---

## Get States

```http
GET /states
```

---

# 📂 Dataset

Current dataset includes

- Complaints Against Police
- State-wise Records
- Historical Crime Statistics
- NCRB Data

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/<your-username>/SurakshaAI.git

cd SurakshaAI
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Start Backend

```bash
cd functions/crime_api

python main.py
```

---

## Run Dashboard

```bash
streamlit run streamlit_dashboard.py
```

---

# 📈 Roadmap

- ✅ Crime Analytics
- ✅ Dashboard
- ✅ REST API
- ✅ Catalyst Integration
- 🔄 AI Prediction
- 🔄 Heatmaps
- 🔄 OCR
- 🔄 Network Analysis
- 🔄 PDF Reports
- 🔄 Authentication
- 🔄 Cloud Deployment

---

# 📸 Screenshots

```
screenshots/
│
├── dashboard.png
├── charts.png
├── hotspot.png
├── report.png
```

(Add screenshots after implementation.)

---

# 🎯 Future Scope

- Predictive Policing
- Live Crime Feed
- Mobile Application
- Officer Dashboard
- CCTNS Integration
- Satellite Data
- Voice-based FIR Search

---

# 👨‍💻 Team

**Datathon 2026**

**Challenge 02**

Project: **SurakshaAI**

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository

2. Create a feature branch

3. Commit changes

4. Open a Pull Request

---

# ⭐ Show Your Support

If you found this project useful,

⭐ Star the repository

🍴 Fork it

💡 Share your feedback

---

# 📜 License

This project is developed for educational and hackathon purposes.

---

<div align="center">

## 🛡️ SurakshaAI

### Predict • Analyze • Protect

**Built with Python ❤️ Flask ❤️ Streamlit ❤️ Zoho Catalyst**

</div>
