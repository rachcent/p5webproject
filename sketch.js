
let button;

function setup() {
	// make canvas full screen
	createCanvas(windowWidth, windowHeight);
	background(0);
	button = createButton('Deactivate Account');
  button.position(input.x + input.width, 65);
	button.mousePressed(changeBG);
}

function changeBG() {
let val = random(255);
background(val);
}





function draw() {
	// adding clear() to the draw loop will clear each frame, erasing object trails
	// clear();

	ellipse(mouseX, mouseY, 100);
}
