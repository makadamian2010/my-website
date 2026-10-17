const lab = document.querySelector('.lab-console');
const assembly = document.querySelector('.lab-assembly');
const rotation = document.querySelector('#lab-rotation');
const records = [...document.querySelectorAll('.lab-record')];
const disciplines = [...document.querySelectorAll('[data-discipline]')];
function selectDiscipline(index) {
  disciplines.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
  records.forEach((record, i) => { record.open = i === index; });
  assembly.style.setProperty('--joint', (index * 7 - 20) + 'deg');
  rotation.value = String(-25 + index * 10);
  assembly.style.setProperty('--rotation', rotation.value + 'deg');
}
disciplines.forEach((button, index) => button.addEventListener('click', () => selectDiscipline(index)));
records.forEach((record, index) => record.querySelector('summary').addEventListener('click', event => {
  event.preventDefault();
  selectDiscipline(index);
}));
rotation.addEventListener('input', () => assembly.style.setProperty('--rotation', rotation.value + 'deg'));
document.querySelector('#lab-reset').addEventListener('click', () => selectDiscipline(0));
document.querySelector('#lab-flat').addEventListener('click', event => {
  const flat = lab.classList.toggle('flat');
  event.currentTarget.setAttribute('aria-pressed', String(flat));
  event.currentTarget.textContent = flat ? '3D view' : '2D view';
});
document.querySelectorAll('[data-evidence]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  window.showTab(link.dataset.evidence);
}));
// Progressive enhancement: native details remain usable without animation or WebGL.
document.querySelectorAll('#projects .card').forEach(card => {
  const details = document.createElement('details');
  details.className = 'project-spec';
  const summary = document.createElement('summary');
  summary.textContent = 'Inspect project notes';
  details.append(summary);
  const list = document.createElement('dl');
  const description = card.querySelector('p')?.textContent || '';
  const status = /concept/i.test(description) ? 'Concept / exploration' : /research paper/i.test(description) ? 'Research paper' : card.querySelector('a[href]') ? 'Published web project' : /demo/i.test(description) ? 'Demo' : 'Portfolio project — completion date not specified';
  const fields = [['Stage', status], ['Focus', [...card.querySelectorAll('.tag')].map(tag => tag.textContent).join(' · ') || description]];
  fields.forEach(([label, value]) => {
    const term = document.createElement('dt');
    const definition = document.createElement('dd');
    term.textContent = label;
    definition.textContent = value;
    list.append(term, definition);
  });
  details.append(list);
  details.addEventListener('click', event => event.stopPropagation());
  details.addEventListener('keydown', event => event.stopPropagation());
  card.append(details);
  // Native disclosure replaces the redundant card-wide dialog trigger.
  card.removeAttribute('role');
  card.removeAttribute('tabindex');
  card.removeAttribute('aria-haspopup');
});
