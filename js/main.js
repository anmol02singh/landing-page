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
    const gtranslateWrapper = document.querySelector('.gtranslate_wrapper');
    const rightNavBar = document.querySelector('.right-nav-bar');

    menuIcon.addEventListener('click', () => {
        mobileMenuOverlay.classList.add('active');
    });

    closeMenuButton.addEventListener('click', () => {
        mobileMenuOverlay.classList.remove('active');
    });
    
    mobileMenuOverlay.addEventListener('click', (e) => {
        if (e.target === mobileMenuOverlay) {
            mobileMenuOverlay.classList.remove('active');
        }
    });

    dropdownToggles.forEach((toggle) => {
        toggle.addEventListener('click', () => {
            const dropdownMenu = toggle.querySelector('.dropdown-menu-mobile');
            const dropdownIcon = toggle.querySelector('.dropdown-icon-mobile');
    
            if (dropdownMenu) {
                dropdownToggles.forEach((otherToggle) => {
                    const otherMenu = otherToggle.querySelector('.dropdown-menu-mobile');
                    const otherIcon = otherToggle.querySelector('.dropdown-icon-mobile');
                    if (otherMenu && otherMenu !== dropdownMenu) {
                        otherMenu.classList.remove('visible');
                        otherIcon.src = '/assets/dropdown.svg';
                    }
                });
                dropdownMenu.classList.toggle('visible');
    
                const isVisible = dropdownMenu.classList.contains('visible');
                dropdownIcon.src = isVisible ? '/assets/dropup.svg' : '/assets/dropdown.svg';
            }
        });
    });
    document.querySelectorAll('.mobile-nested-dropdown').forEach((nestedToggle) => {
        const nestedHeading = nestedToggle.querySelector('.mobile-nested-heading');
        const nestedMenu = nestedToggle.querySelector('.mobile-nested-dropdown-menu');

        nestedHeading.addEventListener('click', (e) => {
            e.stopPropagation();

            const isAlreadyVisible = nestedMenu.classList.contains('visible');
            if (isAlreadyVisible) {
                nestedMenu.classList.remove('visible');
            } else {
                nestedMenu.classList.add('visible');
            }
        });
    });

    if (gtranslateWrapper && rightNavBar) {
        const loginSignupElement = document.querySelector('.login-signup');
        
        if (loginSignupElement) {
            rightNavBar.insertBefore(gtranslateWrapper, loginSignupElement);
        } else {
            rightNavBar.appendChild(gtranslateWrapper);
        }
    }
    
    if (gtranslateWrapper) {
        gtranslateWrapper.addEventListener('click', () => {
            gtranslateWrapper.classList.toggle('active');
        });
    }
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
