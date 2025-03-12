// script.js

window.onload = () => {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;
  const contactForm = document.getElementById("contact-form");
  
  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Animate elements when they come into view
  function animateOnScroll() {
    const animElements = document.querySelectorAll('.project, .skill-category, #contact, #about, #Resume');
    
    animElements.forEach((element, index) => {
      if (isInViewport(element) && !element.classList.contains('animated')) {
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
          element.classList.add('animated');
        }, 150 * index);
      }
    });
  }
  
  // Initialize elements
  const projects = document.querySelectorAll('.project');
  const sections = document.querySelectorAll('.skill-category, #contact, #about, #Resume');
  
  [...projects, ...sections].forEach(element => {
    if (!element.classList.contains('animated')) {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    }
  });
  
  // Call once on load
  animateOnScroll();
  
  // Add scroll event listener
  window.addEventListener('scroll', animateOnScroll);
  
  // Project filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project');
  
  // Set data attributes for projects based on tech used
  projects.forEach(project => {
    const techText = project.querySelector('p:nth-of-type(1)').textContent.toLowerCase();
    
    if (techText.includes('react')) {
      project.setAttribute('data-category', 'react');
    }
    if (techText.includes('firebase')) {
      project.setAttribute('data-category', 'firebase');
    }
    if (techText.includes('api')) {
      project.setAttribute('data-category', 'api');
    }
  });
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      
      projects.forEach(project => {
        if (filter === 'all') {
          project.style.display = 'block';
          setTimeout(() => {
            project.style.opacity = '1';
            project.style.transform = 'translateY(0)';
          }, 100);
        } else if (project.getAttribute('data-category') === filter) {
          project.style.display = 'block';
          setTimeout(() => {
            project.style.opacity = '1';
            project.style.transform = 'translateY(0)';
          }, 100);
        } else {
          project.style.opacity = '0';
          project.style.transform = 'translateY(20px)';
          setTimeout(() => {
            project.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Check for dark mode preference in localStorage
  if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀️ Light Mode";
  }

  // Toggle dark mode
  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "enabled");
      darkModeToggle.textContent = "☀️ Light Mode";
    } else {
      localStorage.setItem("dark-mode", "disabled");
      darkModeToggle.textContent = "🌙 Dark Mode";
    }
  });

  // Contact form handling
  if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      
      // For now, just show an alert (in a real app, you'd send this to a server)
      alert(`Thanks for your message, ${name}! I'll get back to you at ${email} soon.`);
      
      // Clear the form
      contactForm.reset();
    });
  }

  // Add smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Back to top button
  const backToTopBtn = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
};
