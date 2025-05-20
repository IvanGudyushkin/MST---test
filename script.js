window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  const scrollPosition = window.scrollY || window.pageYOffset;
  
  if (scrollPosition > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!this.checkValidity()) {
            return;
        }
        
        alert('Form submitted successfully!');
        
        this.reset();
        
        console.log('Form submitted successfully!');
    });
