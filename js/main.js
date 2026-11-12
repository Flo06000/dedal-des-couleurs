/* effets au défilement : apparition des blocs et barre de progression */
(function () {
  var root = document.documentElement;
  if (!('IntersectionObserver' in window) ||
      (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
    return;
  }
  root.classList.add('js');

  document.addEventListener('DOMContentLoaded', function () {
    /* les blocs apparaissent quand on arrive dessus */
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    Array.prototype.forEach.call(document.querySelectorAll('.reveal'), function (el) { io.observe(el); });

    /* barre de progression en haut de la page */
    var bar = document.querySelector('.progress');
    if (bar) {
      var ticking = false;
      var update = function () {
        var max = root.scrollHeight - window.innerHeight;
        bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(window.scrollY / max, 1) : 0) + ')';
        ticking = false;
      };
      window.addEventListener('scroll', function () {
        if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
      }, { passive: true });
      update();
    }
  });
})();
