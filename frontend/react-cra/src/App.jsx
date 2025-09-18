import React from 'react';
import ChallengeHarness from './components/ChallengeHarness';

export default function App() {
  return (
    <div className="container p-3">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3">CRA Sandbox</h1>
        <a className="btn btn-outline-primary" href="http://localhost:4000/health" target="_blank" rel="noreferrer">
          Ping Node API
        </a>
      </header>
      <ChallengeHarness />
    </div>
  );
}
