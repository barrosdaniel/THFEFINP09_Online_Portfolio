/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/assets/particles.json', function () {
  console.log('callback - particles.js config loaded');
});

// Replace footer copyright year with current year
document.querySelector('#year').textContent = new Date().getFullYear();