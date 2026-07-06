# SurakshaAI - AI-Driven Crime Analytics Platform

Datathon 2026 Challenge 02. Crime risk scoring API using Indian police complaints data (2001-2010).

## Setup

1. Clone repo
2. Ensure `25_Complaints_against_police.csv` is in `datasets/` or function folder

## Run

```bash
cd SurakshaAI\

# Terminal 1: Start server
cd SurakshaAI\functions/crime_api
python main1.py

# Terminal 2: Query API
cd D:\SurakshaAI/functions\crime_api
python risk.py state_name

        OR
On Web Browser
http://127.0.0.1:5000/risk/Delhi
         
if not run then check whether the Catalyst cli is broken or not . For datasets refer to the datasets/rajananad/crime-in-india and versions


