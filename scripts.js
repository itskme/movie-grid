const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach((item) => {
  const link = item.querySelector('a');
  const linkUrl = link.getAttribute('data-link');

  link.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = linkUrl;
  });
});