var button;
var x=500;
var y=500;
var nabutton;


function setup() {
	// make canvas full screen
	createCanvas(windowWidth, windowHeight);
	// button=createButton('deactivate your account');
	button = select('#dabutton');
	button.style("background-color","#F6F6F6");
	button.style("padding","2px");
	button.position(x,y);
	button.mousePressed(randomLocation);

	nabutton = select('#nabutton');
	nabutton.style("background-color","#3D87F9");
	nabutton.style("padding","15px");
	nabutton.position(center);
}

function randomLocation() {
	 x=random(windowWidth)
	 y=random(windowHeight)
	 button.position(x,y);
}









function draw() {
	// adding clear() to the draw loop will clear each frame, erasing object trails
	// clear();

		if (nabutton.mouseIsPressed) {
	    stroke(white);
	  }
	  else {
	    noStroke(white);
	  }
	  textSize(12 + (mouseX / width)*72);
	  text("Attention, please.", 50, 200);






}
