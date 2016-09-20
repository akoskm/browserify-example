(function () {
  var app = require('./app');

  var header1 = document.getElementById('message');
  header1.textContent = app.doSomething();
})();