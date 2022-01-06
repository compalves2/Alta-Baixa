var image1 =  document.querySelector("#img_seta>img");

document.onmousemove = function(e) {
  var rect1 = image1.getBoundingClientRect();
  var centerX = rect1.left + rect1.width * 0.5-image1.clientWidth/2;
  var centerY = (rect1.top + rect1.height * 0.5);
  var dx = e.pageX - centerX;
  var dy = e.pageY - centerY;
  var theta = Math.atan2(dy, dx);
  var angle = theta * (180/Math.PI);
  image1.style.transform = `translate(-50%, 0%) rotate(${20+angle}deg)`;
};