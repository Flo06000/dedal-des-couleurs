/* Dedal des Couleurs — effets au défilement (amélioration progressive).
   Sans JavaScript, tout le contenu reste visible. */
(function () {
  var root = document.documentElement;
  if (!('IntersectionObserver' in window) ||
      (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
    return;
  }
  root.classList.add('js');

  document.addEventListener('DOMContentLoaded', function () {
    /* Apparition des blocs quand ils entrent à l'écran */
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    Array.prototype.forEach.call(document.querySelectorAll('.reveal'), function (el) { io.observe(el); });

    /* Barre de progression de lecture */
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
