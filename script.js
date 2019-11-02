var on = addEventListener,
  $ = function(q) {
    return document.querySelector(q)
  }, $$ = function(q) {
    return document.querySelectorAll(q)
  }, $body = document.body,
  $inner = $('.inner');
on('load', function() {
  setTimeout(function() {
    $body.className = $body.className.replace(/\bis-loading\b/, 'is-playing');
    setTimeout(function() {
      $body.className = $body.className.replace(/\bis-playing\b/, 'is-ready');
    }, 1500);
  }, 100);
});
var style, sheet, rule;
style = document.createElement('style');
style.appendChild(document.createTextNode(''));
document.head.appendChild(style);
sheet = style.sheet;
if (navigator.userAgent.match(/Android ([0-9\.]+)/)) {
  (function() {
    sheet.insertRule('body::after { }', 0);
    rule = sheet.cssRules[0];
    var f = function() {
      rule.style.cssText = 'height: ' + (Math.max(screen.width, screen.height)) + 'px';
    };
    on('load', f);
    on('orientationchange', f);
    on('touchmove', f);
  })();
} else if (navigator.userAgent.match(/([0-9_]+) like Mac OS X/) || navigator.userAgent.match(/CPU like Mac OS X/)) {
  (function() {
    sheet.insertRule('body::after { }', 0);
    rule = sheet.cssRules[0];
    rule.style.cssText = '-webkit-transform: scale(1.0)';
  })();
} else if (navigator.userAgent.match(/(MSIE|rv:11\.0)/)) {
  (function() {
    var t, f;
    f = function() {
      var x = $('#wrapper');
      x.style.height = 'auto';
      if (x.scrollHeight <= innerHeight) x.style.height = '100vh';
    };
    (f)();
    on('resize', function() {
      clearTimeout(t);
      t = setTimeout(f, 250);
    });
  })();
}