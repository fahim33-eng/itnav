# ITNAV Recruit Backend

FastAPI backend for the ITNAV recruitment website clone.

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the server:
```bash
python main.py
```

Or using uvicorn directly:
```bash
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`

## API Endpoints

- `GET /` - Health check
- `GET /api/home` - Get home page data
- `GET /api/members` - Get all members data
- `GET /api/graduates` - Get all graduates data

## Note

This is a simple backend with mock data, no database required. The frontend will work with or without this backend running, using fallback mock data.

