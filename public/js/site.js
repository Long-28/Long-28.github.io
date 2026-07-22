(() => {
  const sidebar = document.getElementById('sidebar');
  document.getElementById('menu-toggle')?.addEventListener('click', () => sidebar?.classList.toggle('open'));
  const search = document.getElementById('site-search');
  search?.addEventListener('input', (event) => {
    const term = event.target.value.trim().toLowerCase();
    document.querySelectorAll('#sidebar-nav a').forEach((link) => {
      const match = !term || link.textContent.toLowerCase().includes(term);
      link.style.display = match ? '' : 'none';
      if (match && term) link.closest('details')?.setAttribute('open', '');
    });
  });
})();
