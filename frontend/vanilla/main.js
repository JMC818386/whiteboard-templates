const app = document.getElementById('app');

export function radialProgress(value = 70) {
  const size = 120, stroke = 12;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;

  return `
  <div class="card p-3 d-inline-block me-3">
    <svg width="${size}" height="${size}">
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" stroke="#eee" stroke-width="${stroke}" fill="none"/>
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}"
        stroke="var(--brand)" stroke-width="${stroke}" fill="none"
        stroke-dasharray="${c}" stroke-dashoffset="${offset}"
        stroke-linecap="round" transform="rotate(-90 ${size / 2} ${size / 2})"/>
      <text x="50%" y="50%" text-anchor="middle" dy="6" font-size="18">${value}%</text>
    </svg>
  </div>`;
}

function mount() {
  app.innerHTML = `
    <div class="d-flex align-items-center">
      ${radialProgress(70)}
      <div>
        <h2 class="h5 mb-2">Challenge Harness</h2>
        <p class="mb-0">Add your algorithm/UI here. Edit <code>main.js</code> live.</p>
      </div>
    </div>`;
}
mount();

document.getElementById('runTest').addEventListener('click', () => {
  alert('Demo: wire this button to your algorithm test or API call.');
});
