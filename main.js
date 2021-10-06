canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Give specific height and width to the car image
greencar_width = 75;
greencar_height = 100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencar_x = 5;
greencar_y = 225;
//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
	bgimg = new Image();
    bgimg.onload=uploadBackground;
    bgimg.src=parkingLot.jpg;
    grimg = new Image();
    grimg.onload=uploadgreencar;
    grimg.src=car2.png;
}
window.addEventListener("load", uploadBackground);
function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(bgimg,0,0,canvas.width,canvas.height);

}
window.addEventListener("load", uploadgreencar);
function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(grimg,roverx,rovery,roverwidth,roverheight);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up() {
	if(greencar_y>=0){
		greencar_y = greencar_y - 10;
	   console.log("when up arrow is pressed - x = "+ greencar_x +" | y = "+ greencar_y);
	   uploadBackground();
	   uploadgreencar();
	}
  }
  function down() {
	if(greencar_y<=500){
		greencar_y = greencar_y + 10;
		 console.log("when down arrow is pressed - x = "+ greencar_x +" | y = "+ greencar_y);
		 uploadBackground();
		 uploadgreencar();
	  }
  }
  function left() {
	if(greencar_x>=0){
		greencar_x = greencar_x - 10;
		 console.log("when left arrow is pressed - x = "+ greencar_x +" | y = "+ greencar_y);
		 uploadBackground();
		 uploadgreencar();
	  }
  }
  function right() {
	if(greencar_x<=700){
		greencar_x = greencar_x + 10;
		 console.log("when right is pressed - x ="+ greencar_x +" | y = "+ greencar_y);
		 uploadBackground();
		 uploadgreencar();
	  }
  }