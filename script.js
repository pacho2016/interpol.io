const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');
const themeToggle = document.getElementById('themeToggle');

for (const tab of tabs) {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    tabs.forEach((item) => item.classList.toggle('active', item === tab));
    panels.forEach((panel) => {
      panel.classList.toggle('active', panel.id === target);
    });
  });
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');

  if (document.body.classList.contains('light')) {
    themeToggle.textContent = 'Тёмная тема';
  } else {
    themeToggle.textContent = 'Светлая тема';
  }
});
