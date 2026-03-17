// add custom js in this file

// docs index tree collapse / expand
document.addEventListener('DOMContentLoaded', function () {
  var toggles = document.querySelectorAll('.docs-index-toggle');
  if (!toggles || !toggles.length) return;

  toggles.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var node = btn.closest('.docs-index-node');
      if (!node) return;
      var children = node.querySelector(':scope > .docs-index-children');
      if (!children) return;

      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      node.classList.toggle('collapsed', expanded);
      btn.textContent = expanded ? '▸' : '▾';
    });
  });
});
