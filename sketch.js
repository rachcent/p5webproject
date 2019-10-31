var x=500;
var y=500;



function setup() {
	// make canvas full screen
	createCanvas(windowWidth, windowHeight);
	// button=createButton('deactivate your account');
	button = select('#dabutton');
	button.style("background-color","#F6F6F6");
	button.style("padding","2px");
	button.position(randomLocation);
	button.mousePressed(randomLocation);

	nabutton = select('#nabutton');
	nabutton.style("background-color","#3D87F9");
	nabutton.style("padding","15px");
	nabutton.position(randomLocation);
}


function randomLocation() {
	 x=random(windowWidth)
	 y=random(windowHeight)
	 button.position(x,y);
}









function draw() {








}
