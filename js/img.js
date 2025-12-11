function swapImage(el, src, alt) {
    if (el && el.tagName === 'IMG') {
        el.src = src;

        if (alt !== undefined) {
            el.alt = alt;
        } else {
            el.alt = '';
      }
    }
}

function updateActiveClass(images, activeIndex) {
    images.forEach((img, index) => {
        if (index === activeIndex) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
}

function carousel(el) {
    if (el && el.classList.contains('carousel')) {
        const mainEl = el.querySelector('img.main');
        const images = el.querySelectorAll('img');
      
        // Add click event listener to each image
        images.forEach((img, index) => {
            img.addEventListener('click', () => {
                updateActiveClass(images, index);
                swapImage(mainEl, img.src, img.alt);
            });
        });

        // Rotate images every 5 seconds
        if (el.classList.contains('auto')) {
            let currentIndex = 0;
            setInterval(() => {
                currentIndex = (currentIndex + 1) % images.length;
                updateActiveClass(images, currentIndex);
                swapImage(mainEl, images[currentIndex].src, images[currentIndex].alt);
            }, 5000);
        };
    }
}