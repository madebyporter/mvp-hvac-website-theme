(function () {
  var root = document.getElementById('hero');
  if (!root) return;

  var panels = root.querySelectorAll('[data-hero-slide-panel]');
  var imgs = root.querySelectorAll('[data-hero-slide-img]');
  var dots = root.querySelectorAll('[data-hero-slide-dot]');
  var prev = root.querySelector('[data-hero-slide-prev]');
  var next = root.querySelector('[data-hero-slide-next]');
  var n = panels.length;
  var idx = 0;
  var reduceMotion = false;
  var autoTimer;

  try {
    reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (e) {
    /* ignore */
  }

  function show(i) {
    idx = (i + n) % n;
    var j;
    for (j = 0; j < n; j++) {
      var on = j === idx;
      panels[j].hidden = !on;
      panels[j].setAttribute('aria-hidden', on ? 'false' : 'true');
      imgs[j].classList.toggle('opacity-100', on);
      imgs[j].classList.toggle('opacity-0', !on);
      imgs[j].setAttribute('aria-hidden', on ? 'false' : 'true');
      if (on) dots[j].setAttribute('aria-current', 'true');
      else dots[j].removeAttribute('aria-current');
      dots[j].classList.toggle('bg-white', on);
      dots[j].classList.toggle('bg-white/30', !on);
    }
  }

  function step(delta) {
    show(idx + delta);
  }

  function stopAuto() {
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = null;
  }

  function startAuto() {
    stopAuto();
    if (reduceMotion) return;
    autoTimer = setInterval(function () {
      step(1);
    }, 9000);
  }

  if (prev) prev.addEventListener('click', function () { step(-1); });
  if (next) next.addEventListener('click', function () { step(1); });

  dots.forEach(function (dot, j) {
    dot.addEventListener('click', function () {
      show(j);
    });
  });

  root.addEventListener('mouseenter', stopAuto);
  root.addEventListener('mouseleave', startAuto);
  startAuto();
})();
