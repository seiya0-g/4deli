'use strict';
(function () {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  function init() {

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
          const rect = target.getBoundingClientRect();
          const offsetTop = window.pageYOffset + rect.top - headerHeight;

          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });

          if (offsetTop <= 0) {
            history.pushState(null, '', window.location.pathname);
          } else {
            history.pushState(null, '', targetId);
          }
        }
      });
    });
  }
})();
