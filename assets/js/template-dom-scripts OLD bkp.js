/* Menu button */
(function () {
  var button = document.getElementById('menu-button');
  if (button) {
    var menu = document.getElementById('patterns-list');
    button.addEventListener('click', function() {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
    })
  }
}());

/* Expandable sections */
(function () {
  function toggle (button, target) {
    var expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
    target.hidden = !target.hidden;
  }

  var expanders = document.querySelectorAll('[data-expands]');

  Array.prototype.forEach.call(expanders, function (expander) {
    var target = document.getElementById(expander.getAttribute('data-expands'));

    expander.addEventListener('click', function () {
      toggle(expander, target);
    })
  })
}());

/* Persist navigation scroll point */
/*(function () {
  window.onbeforeunload = function () {
    var patternsNav = document.getElementById('patterns-nav');
    if (patternsNav) {
      var scrollPoint = patternsNav.scrollTop;
      localStorage.setItem('scrollPoint', scrollPoint);
    }
  }

  window.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('patterns-nav')) {
      if (window.location.href.indexOf('patterns/') !== -1) {
        document.getElementById('patterns-nav').scrollTop = parseInt(localStorage.getItem('scrollPoint'));
      } else {
        document.getElementById('patterns-nav').scrollTop = 0;
      }
    }
  })
}());*/

/* Switch and persist theme */
(function () {
  var checkbox = document.getElementById('themer');

  function persistTheme(val) {
    localStorage.setItem('darkTheme', val);
  }

  function applyDarkTheme() {
    var rules = [
      '.intro-and-nav, .main-and-footer { filter: invert(100%); }',
      '* { background-color: inherit; }',
      'img:not([src*=".svg"]), .colors, iframe, .demo-container { filter: invert(100%); }'
    ];
    rules.forEach(function(rule) {
      document.styleSheets[0].insertRule(rule);
    })
  }

  function clearDarkTheme() {
    for (let i = 0; i < document.styleSheets[0].cssRules.length; i++) {
      document.styleSheets[0].deleteRule(i);
    }
  }

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      applyDarkTheme();
      persistTheme('true');
    } else {
      clearDarkTheme();
      persistTheme('false');
    }
  });

  function showTheme() {
    if (localStorage.getItem('darkTheme') === 'true') {
      applyDarkTheme();
      checkbox.checked = true;
    }
  }

  function showContent() {
    document.body.style.visibility = 'visible';
    document.body.style.opacity = 1;
  }

  window.addEventListener('DOMContentLoaded', function () {
    showTheme();
    showContent();
  });

}());
