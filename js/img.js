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

function carousel(el) {
    if (el && el.classList.contains('carousel')) {
      const mainEl = el.querySelector('img.main');
      const images = el.querySelectorAll('img');

      console.log(mainEl)
      
      // Add click event listener to each image
      images.forEach((img, index) => {
          img.addEventListener('click', () => {
              // Add 'active' class to clicked image
              img.classList.add('active');

              // Remove 'active' class from other images
              images.forEach((otherImg, otherIndex) => {      
                  if (otherIndex !== index) {
                      otherImg.classList.remove('active');
                  }
              });

              // Swap the image onto the main display
              swapImage(mainEl, img.src, img.alt);
          });
      });
    }
}