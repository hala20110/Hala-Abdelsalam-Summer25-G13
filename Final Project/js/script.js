function updateCountdown() {
        const now = new Date();
        const target = new Date(now.getTime() + 24 * 60 * 60 * 1000);
        
        const timer = setInterval(function() {
            const now = new Date();
            const diff = target - now;
            
            if (diff <= 0) {
                clearInterval(timer);
                return;
            }
            
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            document.querySelectorAll('.timer-circle')[0].textContent = hours.toString().padStart(2, '0');
            document.querySelectorAll('.timer-circle')[1].textContent = minutes.toString().padStart(2, '0');
            document.querySelectorAll('.timer-circle')[2].textContent = seconds.toString().padStart(2, '0');
        }, 1000);
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        updateCountdown();
    
        $('.owl-carousel').owlCarousel({
            loop: true,
            // margin: 20,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
        
        $('.carousel-nav.prev').click(function() {
            $('.owl-carousel').trigger('prev.owl.carousel');
        });
        
        $('.carousel-nav.next').click(function() {
            $('.owl-carousel').trigger('next.owl.carousel');
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail img');
    const mainImage = document.querySelector('.product-img img');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const newSrc = this.getAttribute('src');
            
            mainImage.setAttribute('src', newSrc);
            
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.categories-toggle');
  const sidebar = document.querySelector('.categories-sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
  });
  
  document.addEventListener('click', function(e) {
    if (!sidebar.contains(e.target) && e.target !== btn) {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
    }
  });
  });

  document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  
  form.addEventListener('submit', function(event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    form.classList.add('was-validated');
  }, false);
  
  // Optional: Add red border to invalid fields
  const inputs = form.querySelectorAll('input[required], textarea[required]');
  inputs.forEach(input => {
    input.addEventListener('input', function() {
      if (this.checkValidity()) {
        this.classList.remove('is-invalid');
      } else {
        this.classList.add('is-invalid');
      }
    });
  });
});

// PRODUCT

document.querySelectorAll('.product-thumbnail').forEach(thumb => {
            thumb.addEventListener('click', function() {
                document.querySelectorAll('.product-thumbnail').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                const mainImg = document.getElementById('main-product-image');
                mainImg.src = this.src.replace('-150x150', '');
            });
});
  document.querySelectorAll('.tab-header').forEach(header => {
    header.addEventListener('click', function() {
      document.querySelectorAll('.tab-header').forEach(h => h.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      
      this.classList.add('active');
      const targetId = this.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
    });
  });

document.querySelectorAll('.star-rating .star').forEach(star => {
star.addEventListener('click', function() {
  const stars = this.parentElement.querySelectorAll('.star');
  const clickedIndex = Array.from(stars).indexOf(this);
  
  stars.forEach((s, index) => {
    if(index <= clickedIndex) {
      s.classList.add('active');
      s.textContent = '★';
    } else {
      s.classList.remove('active');
      s.textContent = '☆';
    }
  });
});
});
document.querySelectorAll('.size-option').forEach(size => {
    size.addEventListener('click', function() {
        document.querySelectorAll('.size-option').forEach(s => s.classList.remove('active'));
        this.classList.add('active');
    });
});