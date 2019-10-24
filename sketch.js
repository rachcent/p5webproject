let button;


function setup() {
	// make canvas full screen
	createCanvas(windowWidth, windowHeight);
	background(0);
	button = createButton('Deactivate Account');
	button.position(19, 19);
	button.mousePressed(buttonChange);
}






function draw() {
	// adding clear() to the draw loop will clear each frame, erasing object trails
	// clear();

	ellipse(mouseX, mouseY, 100);
}
