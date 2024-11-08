function loadSection(id, file) {
    fetch(file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
      })
      .catch(error => console.error('Error loading section:', error));
}

loadSection('main-page', 'html/main-page.html');
loadSection('featured-jobs', 'html/featured-jobs.html');
loadSection('career-planning-portal', 'html/career-planning-portal.html');
loadSection('footer', 'html/footer.html');