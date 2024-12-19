function loadSection(id, file, callback) {
    fetch(file)
        .then((response) => response.text())
        .then((data) => {
            document.getElementById(id).innerHTML = data;
            if (callback) callback(); // Execute callback after loading the content
        })
        .catch((error) => console.error('Error loading section:', error));
}

// Load main page and initialize menu functionality
loadSection('main-page', 'html/main-page.html', () => {
    const menuIcon = document.querySelector('.menu-icon img');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const closeMenuButton = document.querySelector('.close-menu');

    // Show the mobile menu overlay
    menuIcon.addEventListener('click', () => {
        mobileMenuOverlay.style.display = 'block';
    });

    // Close the mobile menu overlay
    closeMenuButton.addEventListener('click', () => {
        mobileMenuOverlay.style.display = 'none';
    });

    // Hide the menu when clicking outside the content
    mobileMenuOverlay.addEventListener('click', (e) => {
        if (e.target === mobileMenuOverlay) {
            mobileMenuOverlay.style.display = 'none';
        }
    });

    // Dropdown functionality for nested menus
    const dropdownHeaders = document.querySelectorAll('.mobile-menu > ul > li');

    dropdownHeaders.forEach((header) => {
        header.addEventListener('click', (e) => {
            const submenu = header.querySelector('ul');
            const dropdownIcon = header.querySelector('.dropdown-icon');

            if (submenu) {
                const isVisible = submenu.style.display === 'block';
                submenu.style.display = isVisible ? 'none' : 'block';
                dropdownIcon.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(180deg)';
            }
        });
    });

    
});

// Load other sections
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
