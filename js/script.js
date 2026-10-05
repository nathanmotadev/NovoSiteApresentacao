// Lightbox da galeria de fotografia
(function () {
  var lb = document.getElementById('lightbox');
  var img = document.getElementById('lb-img');
  var cap = document.getElementById('lb-cap');
  var shots = Array.prototype.slice.call(document.querySelectorAll('.gallery .shot'));
  // ordem de navegação = ordem das fotos no arquivo (data-i)
  shots.sort(function (a, b) { return a.dataset.i - b.dataset.i; });
  var cur = null;

  function show(i) {
    var n = shots.length;
    cur = (i + n) % n;
    var im = shots[cur].querySelector('img');
    img.src = im.currentSrc || im.src;
    img.alt = im.alt;
    cap.textContent = im.alt;
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function close() {
    lb.hidden = true;
    cur = null;
    document.body.style.overflow = '';
  }

  shots.forEach(function (b, i) {
    b.addEventListener('click', function () { show(i); });
  });
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
  lb.querySelector('.lb__x').addEventListener('click', close);
  lb.querySelector('.lb__p').addEventListener('click', function (e) { e.stopPropagation(); show(cur - 1); });
  lb.querySelector('.lb__n').addEventListener('click', function (e) { e.stopPropagation(); show(cur + 1); });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(cur - 1);
    if (e.key === 'ArrowRight') show(cur + 1);
  });

  // Tira de filme (Raízes): arrastar com o mouse para rolar para o lado
  var sc = document.querySelector('.film-scroll');
  if (sc) {
    var down = false, sx = 0, sl = 0;
    sc.addEventListener('mousedown', function (e) { down = true; sx = e.pageX; sl = sc.scrollLeft; sc.style.cursor = 'grabbing'; });
    window.addEventListener('mouseup', function () { down = false; sc.style.cursor = ''; });
    window.addEventListener('mousemove', function (e) { if (!down) return; e.preventDefault(); sc.scrollLeft = sl - (e.pageX - sx); });
  }
})();
