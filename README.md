# Whiteboard Template — Holistic Structure & Strategy

A complete, opinionated starter kit for whiteboard interviews—fast to spin up, easy to demo, and built to show breadth across UX/UI, front-end, and back-end development.

## Goals

* **One repo, many sandboxes.** Vanilla HTML/CSS/JS, CRA, and Vite React on the front end; Express and Django/DRF on the back end.
* **Live quickly.** One-command starts, consistent npm scripts, `.env` driven config.
* **Interview-friendly.** Prebuilt "challenge harness," Bootstrap snippets, and a tiny API you can extend on the fly.
* **Design parity.** Figma tokens ↔ CSS variables ↔ React theme for instant, consistent styling.

## Quick Start

```bash
# Copy environment file and customize as needed
cp env.example .env

# Install all dependencies
./scripts/install_all.sh

# Start all services (run each in a separate terminal)
# Terminal 1: Frontend (Vite React)
cd frontend/react-vite && npm run dev

# Terminal 2: Node API
cd backend/node-express && npm run dev

# Terminal 3: Django API (requires PostgreSQL)
cd backend/django-drf && source venv/bin/activate && python manage.py runserver 8000
```

## Frontend Options

### Vanilla HTML/CSS/JS
- **Location**: `frontend/vanilla/`
- **Start**: Open `index.html` in browser (or use Live Server)
- **Features**: Bootstrap 5.3.3, CSS custom properties, ES6 modules
- **Use case**: Pure JavaScript challenges, DOM manipulation

### React (Create React App)
- **Location**: `frontend/react-cra/`
- **Start**: `cd frontend/react-cra && npm start`
- **URL**: http://localhost:3000
- **Features**: React 18, Bootstrap CSS, shared theme
- **Use case**: Component-based challenges, state management

### React (Vite + TypeScript)
- **Location**: `frontend/react-vite/`
- **Start**: `cd frontend/react-vite && npm run dev`
- **URL**: http://localhost:5173
- **Features**: TypeScript, fast HMR, modern tooling
- **Use case**: Type-safe development, algorithm challenges

## Backend APIs

### Node.js + Express (TypeScript)
- **Location**: `backend/node-express/`
- **Start**: `cd backend/node-express && npm run dev`
- **URL**: http://localhost:4000
- **Endpoints**:
  - `GET /health` - Health check
  - `GET /api/echo` - Echo query params
  - `POST /api/sum` - Add two numbers

### Django + DRF + PostgreSQL
- **Location**: `backend/django-drf/`
- **Start**: `cd backend/django-drf && source venv/bin/activate && python manage.py runserver 8000`
- **URL**: http://127.0.0.1:8000
- **Endpoints**:
  - `GET /api/ping/` - Health check
  - `GET|POST /api/notes/` - CRUD operations
- **Setup**: Requires PostgreSQL database (see env.example)

## Development Tools

### Thunder Client API Testing
1. Install Thunder Client extension in VS Code
2. Import collection: `.vscode/thunder-collections/api-tests.json`
3. Test all API endpoints with pre-configured requests

### Bootstrap Snippets Library
- **Location**: `bootstrap-snippets/`
- **Contents**: Ready-to-paste HTML for common components
- **Files**: grid, navbar, buttons, forms, tables, cards, modal, toast, utilities
- **Usage**: Copy HTML, paste into any frontend, convert to JSX for React

### Design System
- **Tokens**: `design/tokens/tokens.json` - Single source of truth
- **CSS Variables**: `design/tokens/css-variables.css` - Used across all frontends
- **Components**: Specs in `design/components/` for interview narration
- **Figma**: Integration guide in `design/figma/README.md`

## Interview Performance Strategy

### Warm-up (30-60s)
1. Start Vite app: `cd frontend/react-vite && npm run dev`
2. Start Node API: `cd backend/node-express && npm run dev`
3. Open Thunder Client, test `/health` endpoint
4. Show live reload and API connectivity

### UI Task (5-10m)
1. Open `bootstrap-snippets/navbar.html` and `grid.html`
2. Copy into `frontend/react-vite/src/App.tsx` (convert to JSX)
3. Wire state in `ChallengeHarness.tsx`
4. Show responsive design and component interaction

### API Task (5m)
1. Add new route in `backend/node-express/src/routes/examples.ts`
2. Example: `POST /api/score` with validation
3. Test via Thunder Client
4. Show error handling and JSON responses

### Full-stack Bridge (5-10m)
1. Fetch API from React component
2. Display results with Bootstrap components
3. Show loading states and error handling
4. Demonstrate real-time updates

### Design Rationale
1. Open Figma design system (if available)
2. Explain token mapping: `tokens.json` → `css-variables.css` → React theme
3. Show responsive breakpoints and component variants
4. Demonstrate design-dev handoff process

## Common Interview Tasks

### Algorithm/Data Structures
- **Primary location**: `frontend/react-vite/src/components/ChallengeHarness.tsx`
- **Features**: TypeScript for type safety, React state for visualization
- **Examples**: Fibonacci, sorting, tree traversal, dynamic programming

### UI/UX Implementation
- **Tools**: Bootstrap snippets, CSS custom properties
- **Patterns**: Responsive grids, form validation, modal workflows
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

### API Development
- **Node.js**: Add routes in `backend/node-express/src/routes/`
- **Django**: Add views in `backend/django-drf/api/views.py`
- **Testing**: Use Thunder Client for immediate feedback

### Database Operations
- **Models**: Define in `backend/django-drf/api/models.py`
- **Migrations**: `python manage.py makemigrations && python manage.py migrate`
- **Admin**: Access at http://127.0.0.1:8000/admin/

## Project Structure

```
whiteboard-templates/
├── README.md
├── .editorconfig
├── .gitignore
├── .nvmrc (Node 18)
├── env.example
├── .vscode/
│   ├── extensions.json (recommended extensions)
│   ├── settings.json (workspace settings)
│   └── thunder-collections/api-tests.json
├── scripts/
│   ├── install_all.sh (setup all projects)
│   ├── start_all.sh (start commands reference)
│   └── reset_db.sh (Django database reset)
├── frontend/
│   ├── vanilla/ (HTML/CSS/JS)
│   ├── react-cra/ (Create React App)
│   └── react-vite/ (Vite + TypeScript)
├── backend/
│   ├── node-express/ (TypeScript API)
│   └── django-drf/ (Python API)
├── design/
│   ├── figma/README.md
│   ├── tokens/ (design tokens)
│   └── components/ (component specs)
└── bootstrap-snippets/ (HTML components)
```

## Requirements

- **Node.js**: v18+ (see .nvmrc)
- **Python**: 3.8+
- **PostgreSQL**: For Django backend (optional, can use SQLite)
- **VS Code**: Recommended with extensions

## Optional Enhancements

- **Docker**: Add docker-compose.yml for PostgreSQL
- **Testing**: Jest + RTL for React, pytest for Django
- **Linting**: ESLint + Prettier configs
- **CI/CD**: GitHub Actions workflow
- **Auth**: JWT authentication stub

## License

MIT - Feel free to use this template for interviews, learning, or any projects!
Sandbox environment for whiteboard interviews
