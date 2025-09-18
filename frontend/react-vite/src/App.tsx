import React from 'react';
import ChallengeHarness from './components/ChallengeHarness';

export default function App() {
  return (
    <div className="container p-3">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3">Vite + TS Sandbox</h1>
        <nav className="d-flex gap-2">
          <a className="btn btn-outline-primary" href="http://localhost:4000/health" target="_blank">Node</a>
          <a className="btn btn-outline-success" href="http://127.0.0.1:8000/api/ping/" target="_blank">Django</a>
        </nav>
      </header>
      <ChallengeHarness />
    </div>
  );
}
