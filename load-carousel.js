window.onload = function() {
  const settings = {
    type: 'carousel',
    breakpoints: {
      414: {
        peek: 45
      },
      768: {
        peek: 85
      },
      1024: {
        peek: 140
      },
      1440: {
        peek: 240
      },
      1920: {
        peek: 300
      },
      5000: {
        peek: 450
      }
    }
  };
  const glides = document.querySelectorAll('.glide');
  glides.forEach(node => new Glide(node, settings).mount());
}