document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('header .dropdown-content a');
    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                var offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth' // Smooth scrolling animation
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var scrollToSectionButton = document.getElementById('scrollToSectionButton');
    var projectsSection = document.getElementById('contact');
    
    if (scrollToSectionButton && projectsSection) {
        scrollToSectionButton.addEventListener('click', function () {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});