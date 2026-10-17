const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle?.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
mainNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const checkboxes = [...document.querySelectorAll('[data-task]')];
const storageKey = 'tilt-fall-project-checklist-v1';
function updateProgress() {
  const done = checkboxes.filter(box => box.checked).length;
  const total = checkboxes.length;
  const percent = total ? Math.round(done / total * 100) : 0;
  document.getElementById('completionText').textContent = `${done} of ${total} complete`;
  document.getElementById('completionPercent').textContent = `${percent}%`;
  document.getElementById('roadmapBar').style.width = `${percent}%`;
  document.getElementById('circleProgress').style.background =
    `conic-gradient(#ffd166 ${percent * 3.6}deg, #344258 0deg)`;
  document.getElementById('circleProgress').style.borderColor = '#344258';
  try { localStorage.setItem(storageKey, JSON.stringify(checkboxes.map(box => box.checked))); } catch (_) {}
}
try {
  const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
  if (Array.isArray(saved)) checkboxes.forEach((box, i) => { box.checked = Boolean(saved[i]); });
} catch (_) {}
checkboxes.forEach(box => box.addEventListener('change', updateProgress));
document.getElementById('resetTasks')?.addEventListener('click', () => {
  if (!confirm('Reset all project checklist items?')) return;
  checkboxes.forEach(box => box.checked = false);
  updateProgress();
});
updateProgress();
