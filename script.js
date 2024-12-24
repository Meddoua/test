document.addEventListener('DOMContentLoaded', function() {
    const galleryData = [
      { src: 'images/image1.jpg.png', title: 'Homepage', description: 'A modern homepage design with a focus on user-friendly navigation and aesthetic visuals.' },
      { src: 'images/image2.jpg.png', title: 'Products Page', description: 'An intuitive layout showcasing a variety of products for easy browsing and purchasing.' },
      { src: 'images/image3.jpg.png', title: 'About Us', description: 'This section provided a detailed overview of the website\'s mission and values.' },
      { src: 'images/image4.jpg.png', title: 'Contact Page', description: 'An interactive design for users to reach out and connect.' },
      // Add more images here
    ];
  
    const galleryGrid = document.querySelector('.grid');
  
    galleryData.forEach(item => {
      const container = document.createElement('div');
      container.classList.add('image-container');
  
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.title;
      img.loading = 'lazy';
  
      const content = document.createElement('div');
      const title = document.createElement('h3');
      title.textContent = item.title;
  
      const description = document.createElement('p');
      description.textContent = item.description;
  
      content.appendChild(title);
      content.appendChild(description);
      container.appendChild(img);
      container.appendChild(content);
      galleryGrid.appendChild(container);
  
      // Add fullscreen functionality
      img.addEventListener('click', function() {
        const fullscreenDiv = document.createElement('div');
        fullscreenDiv.classList.add('fullscreen');
        const fullscreenImg = document.createElement('img');
        fullscreenImg.src = img.src;
        fullscreenDiv.appendChild(fullscreenImg);
        document.body.appendChild(fullscreenDiv);
  
        fullscreenDiv.addEventListener('click', function() {
          document.body.removeChild(fullscreenDiv);
        });
      });
    });
  });
  