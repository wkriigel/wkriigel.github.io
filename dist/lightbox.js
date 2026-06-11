(function () {
  var overlay, img;

  function build() {
    overlay = document.createElement('div');
    overlay.id = 'lb';
    img = document.createElement('img');
    overlay.appendChild(img);
    document.body.appendChild(overlay);
    overlay.addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  function open(src) {
    img.src = src;
    overlay.classList.add('open');
    document.body.classList.add('lb-open');
  }

  function close() {
    overlay.classList.remove('open');
    document.body.classList.remove('lb-open');
  }

  function init() {
    build();
    document.querySelectorAll('.slide img.frame').forEach(function (el) {
      if (el.closest('#about')) return;
      el.classList.add('lb-trigger');
      el.addEventListener('click', function () {
        if (window.innerWidth > 800) open(el.src);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
