var image1 =  document.querySelector("#img_seta>img");
var janela =  document.getElementById("artigo_typeEm");
//image1.style = "position: absolute; width: 700px; height: 700px; margin-left: 40%;"
var rect1 = image1.getBoundingClientRect();
var centerX = janela.clientWidth/2;
var centerY = janela.clientHeight/2;


document.onmousemove = function(e) {
  var dx = e.pageX - centerX;
  var dy = e.pageY - centerY;
  var theta = Math.atan2(dy, dx);
  var pi = Math.PI;
  var angle = theta * (180/pi);
  var trueangle = angle;
  //image1.style.transform = `rotate(${trueangle}deg) translate(-50%, 0%)`;
};
