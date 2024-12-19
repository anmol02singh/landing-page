function loadSection(id, file, callback) {
  fetch(file)
      .then((response) => response.text())
      .then((data) => {
          document.getElementById(id).innerHTML = data;
          if (callback) callback();
      })
      .catch((error) => console.error('Error loading section:', error));
}

loadSection('main-page', 'html/main-page.html', () => {
    const menuIcon = document.querySelector('.menu-icon img');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const closeMenuButton = document.querySelector('.close-menu');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    menuIcon.addEventListener('click', () => {
        mobileMenuOverlay.style.display = 'block';
    });

    closeMenuButton.addEventListener('click', () => {
        mobileMenuOverlay.style.display = 'none';
    });

    mobileMenuOverlay.addEventListener('click', (e) => {
        if (e.target === mobileMenuOverlay) {
            mobileMenuOverlay.style.display = 'none';
        }
    });

    dropdownToggles.forEach((toggle) => {
        toggle.addEventListener('click', () => {
            const dropdownMenu = toggle.querySelector('.dropdown-menu-mobile');
            const dropdownIcon = toggle.querySelector('.dropdown-icon-mobile');
    
            if (dropdownMenu) {
                dropdownToggles.forEach((otherToggle) => {
                    const otherMenu = otherToggle.querySelector('.dropdown-menu-mobile');
                    if (otherMenu && otherMenu !== dropdownMenu) {
                        otherMenu.style.display = 'none';
                    }
                });
    
                const isVisible = dropdownMenu.style.display === 'grid';
                dropdownMenu.style.display = isVisible ? 'none' : 'grid';

                dropdownIcon.src = isVisible ? '/assets/dropdown.png' : '/assets/dropup.png';
            }
        });
    });
});

loadSection('featured-jobs', 'html/featured-jobs.html');
loadSection('resume', 'html/resume.html');
loadSection('hiring', 'html/hiring.html');
loadSection('browse-jobs', 'html/browse-jobs.html');
loadSection('services', 'html/services.html');
loadSection('about', 'html/about.html');
loadSection('portal', 'html/portal.html');
loadSection('education', 'html/education.html');
loadSection('boost', 'html/boost.html');
loadSection('footer', 'html/footer.html');
