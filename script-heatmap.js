window.onload = function () {
  window.requestAnimationFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();
  var heatmap = h337.create({
    container: document.getElementById("heatmapContainer"),
    radius: 60,
  });

  var trackData = false;

  setInterval(function () {
    trackData = true;
  }, 50);

  var idleTimeout, idleInterval;

  var lastX, lastY;
  var idleCount;

  function startIdle() {
    idleCount = 0;
    function idle() {
      heatmap.addData({
        x: lastX,
        y: lastY,
        value: 50,
      });
      idleCount++;
      if (idleCount > 10) {
        clearInterval(idleInterval);
      }
    }
    idle();
    idleInterval = setInterval(idle, 1000);
  }

  document.body.onmousemove = function (ev) {
    if (idleTimeout) clearTimeout(idleTimeout);
    if (idleInterval) clearInterval(idleInterval);

    if (trackData) {
      lastX = ev.pageX;
      lastY = ev.pageY;
      heatmap.addData({
        x: lastX,
        y: lastY,
        value: 50,
      });
      trackData = false;
    }
    idleTimeout = setTimeout(startIdle, 500);
  };
};
