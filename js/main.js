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
loadSection('resume', 'html/resume.html');
loadSection('hiring', 'html/hiring.html');
loadSection('browse-jobs', 'html/browse-jobs.html');
loadSection('footer', 'html/footer.html');