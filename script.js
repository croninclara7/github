// script.js

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal Galleries
const modal = document.getElementById('myModal');
const images = document.querySelectorAll('.gallery img');

images.forEach(image => {
    image.addEventListener('click', function() {
        modal.style.display = 'block';
        const modalImg = document.getElementById('img01');
        modalImg.src = this.src;
    });
});

const closeBtn = document.getElementsByClassName('close')[0];
closeBtn.onclick = function() {
    modal.style.display = 'none';
};

// Video Embeds
const videoLinks = document.querySelectorAll('.video-embed');

videoLinks.forEach(link => {
    link.addEventListener('click', function() {
        const videoId = this.dataset.videoId;
        const videoModal = document.getElementById('videoModal');
        videoModal.style.display = 'block';
        videoModal.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
    });
});

const videoClose = document.getElementById('videoClose');
videoClose.onclick = function() {
    videoModal.style.display = 'none';
    videoModal.innerHTML = '';
};

// Form Handling
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    // Handle form submission (e.g. using fetch)
    console.log('Form submitted', formData);
});

// Interactive Navigation
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        this.classList.add('hovered');
    });
    link.addEventListener('mouseout', function() {
        this.classList.remove('hovered');
    });
});
