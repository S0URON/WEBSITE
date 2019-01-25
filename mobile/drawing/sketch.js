function setup() {
  var c = createCanvas(windowWidth,windowHeight-155);
   cursor(CROSS);
   background(255);
  //var cave = document.getElementById("cave");
   //cave.onclick = function keyPressed(){saveCanvas();}
 
}

function mouseDragged(){
  //variables
  var box = document.getElementById("t");
  var rst = document.getElementById("e");
  var tkn = box.value;
  var clr = document.getElementById("clr");
  var rubber = document.getElementById("rubber");
  var brush = document.getElementById("brush");
  
  //events
  noStroke();
  fill(clr.value);
  rubber.onclick = function rubberS(){clr.value = "#ffffff";}
  brush.onclick = function rubberS(){clr.value = "#00000f";} 
  rst.onclick = function mousePressed(){background(255);}
  ellipse(mouseX,mouseY,tkn*1,tkn*1);


}
function touchMoved(){
  //vars
  var box = document.getElementById("t");
  var rst = document.getElementById("e");
  var clr = document.getElementById("clr");
  var brush = document.getElementById("brush");
  var tkn = box.value;

  //events 
  noStroke();
  fill(clr.value);
  rubber.onclick = function rubberS(){clr.value = "#ffffff";} 
  brush.onclick = function rubberS(){clr.value = "#f00000";} 
  rst.onclick = function touchStarted(){background(255);}
  ellipse(mouseX,mouseY,tkn*1,tkn*1);


}