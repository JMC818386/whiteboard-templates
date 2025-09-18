import React, { useState } from 'react';

export default function ChallengeHarness() {
  const [n, setN] = useState(10);

  function fib(k: number): number {
    if (k <= 1) return k;
    return fib(k - 1) + fib(k - 2);
  }
  return (
    <div className="card p-3">
      <div className="d-flex align-items-center gap-2">
        <label>n:</label>
        <input className="form-control w-auto" type="number" value={n}
          onChange={(e) => setN(parseInt(e.target.value, 10) || 0)} />
        <button className="btn btn-primary" onClick={() => alert(`fib(${n}) = ${fib(n)}`)}>Run</button>
      </div>
      <small className="text-muted mt-2">Replace with any coding challenge.</small>
    </div>
  );
}
