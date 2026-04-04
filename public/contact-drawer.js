(function () {
  var root = document;
  var drawer = root.querySelector('#contact-drawer');
  var openers = root.querySelectorAll('[data-drawer-open]');
  var closers = root.querySelectorAll('[data-drawer-close]');
  var tabButtons = root.querySelectorAll('[data-tab-target]');
  var tabPanels = root.querySelectorAll('[data-tab-panel]');

  function setOpen(open) {
    if (!drawer) return;
    drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
    document.documentElement.classList.toggle('drawer-open', open);
  }

  openers.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setOpen(true);
    });
  });
  closers.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setOpen(false);
    });
  });

  tabButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var target = button.getAttribute('data-tab-target');
      tabButtons.forEach(function (item) {
        item.setAttribute('aria-selected', item === button ? 'true' : 'false');
      });
      tabPanels.forEach(function (panel) {
        var match = panel.getAttribute('data-tab-panel') === target;
        panel.hidden = !match;
      });
    });
  });
})();
