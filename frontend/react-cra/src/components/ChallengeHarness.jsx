import React, { useState } from 'react';

export default function ChallengeHarness() {
  const [value, setValue] = useState(70);

  return (
    <div className="card p-3">
      <label className="form-label">Radial Value: {value}%</label>
      <input type="range" className="form-range" min="0" max="100"
        value={value} onChange={(e) => setValue(parseInt(e.target.value, 10))} />
      <div className="mt-3">TODO: render radial with SVG or canvas.</div>
    </div>
  );
}
