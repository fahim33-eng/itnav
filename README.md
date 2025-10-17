# ITNAV Recruitment Website Clone

This is a full-stack clone of the ITNAV recruitment website, created as an interview task.

## Project Structure

- `frontend/` - Next.js frontend application
- `backend/` - FastAPI backend (optional)

## Quick Start

### Frontend Only (Recommended for Deployment)

```bash
cd frontend
npm install
npm run dev
```

The frontend works standalone with mock data fallback.

### With Backend (Optional)

Terminal 1 - Backend:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

Terminal 2 - Frontend:
```bash
cd frontend
npm install
echo "NEXT_PUBLIC_API_URL=http://localhost:8000" > .env.local
npm run dev
```

## Features

✨ **Frontend**
- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- Framer Motion animations
- shadcn/ui components
- Responsive design
- Carousels on mobile
- API integration with fallback

🚀 **Backend**
- FastAPI
- CORS enabled
- Mock data endpoints
- No database required

## Deployment

### Frontend to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Set root directory to `frontend`
4. Deploy!

Note: Backend deployment is not required as the frontend works with fallback data.

## Documentation

See detailed documentation in:
- `frontend/README.md` - Frontend setup and features
- `backend/README.md` - Backend API documentation

## Pages

- `/` - Home page with mission, message, interviews, and benefits
- `/interview` - Detailed member and graduate interviews

## Technology Stack

**Frontend:**
- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui
- Embla Carousel
- Lucide Icons

**Backend:**
- FastAPI
- Python 3.8+
- Uvicorn

## Adding Images

Place your images in `frontend/public/`:
- `members/` - Member profile images
- `graduates/` - Graduate profile images

## Development Notes

- The app prioritizes API data but falls back to mock data if backend is unavailable
- All animations are optimized for performance
- Fully responsive across all device sizes
- Smooth scroll animations throughout
- Tab-based navigation on interview page
- Carousels automatically appear on mobile devices

## Interview Task Requirements

✅ Clone two pages exactly
✅ Next.js with TypeScript
✅ Tailwind CSS styling
✅ Framer Motion animations
✅ shadcn UI components
✅ FastAPI backend
✅ No database (using mock data)
✅ API integration with fallback
✅ Works with or without backend
✅ Ready for Vercel deployment
✅ Carousels implemented
✅ Lots of animations
✅ Professional and polished UI

## License

Created for interview purposes.

