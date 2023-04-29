setInterval(function() {
  let element = document.querySelector('[href^="https://getadmiral.com"]');
  try {
    if (element) {
      while (true) {
        if (element.parentElement.nodeName.toLowerCase() === 'body') {
          break;
        }
        element = element.parentElement;
      }
      element.remove();
      document.querySelector('html').style.overflow = '';
      document.querySelector('body').style.overflow = '';
      console.log('Admiral of Calamity: Popup Removed');
    }
  } catch (e) {
    console.error('Admiral of Calamity: Exeption Thrown', e);
  }
}, 500);
