# Re-Animator Project Specification

## Project Overview
Build a Windows 95-themed AI writing assistant that brings classic computing back to life with modern AI capabilities.

## Tech Stack
- Frontend: HTML5, CSS3, Vanilla JavaScript
- Backend: Node.js with Express
- Styling: Authentic Windows 95 UI
- AI: Simulated API endpoints

## Core Features
1. Windows 95 desktop interface with authentic styling
2. Notepad application with text input area
3. Three AI processing actions: Improve, Shorten, Summarize
4. Real-time API simulation with loading states
5. Retro design with modern functionality

## API Endpoints
- POST /api/rewrite - Process text with AI simulation
- GET /api/health - System health check

## File Structure
/
├── server.js (Express server)
├── package.json (Dependencies)
├── public/
│   └── index.html (Windows 95 interface)
├── spec.kiro.md (This file)
└── steering.kiro.md (Development guidelines)
