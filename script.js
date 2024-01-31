/* VARIABLES */
let eyeWidth = 50;
let eyeHeight = 40;
let pupilWidth = 22;
let pupilHeight = 25;

/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400,400); 

  print(width);
  //sets the background color
    background('#98d5f5'); 
}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);

  //face
  stroke(0);
  strokeWeight(3);
  fill('#e0ab88');
            ellipse(width/2,height/2,175,200);

  //Eyes
if (mouseIsPressed){
  //One eye closed
  fill(0);

//ellipse(170,170,eyeWidth, eyeHeight/8);
ellipse(230,170,eyeWidth,eyeHeight/8);
//One eye open
 fill('#ab8660');  
ellipse(170,170,eyeWidth,eyeHeight);  
  fill('#210c00');  ellipse(170,170,pupilWidth,pupilHeight);
}
else {
  //Eyes open
fill('#ab8660');  ellipse(170,170,eyeWidth,eyeHeight);    ellipse(230,170,eyeWidth,eyeHeight);

  //Pupils
fill('#210c00');  ellipse(170,170,pupilWidth,pupilHeight);
  ellipse(230,170,pupilWidth,pupilHeight);
}

  //Mouth
fill('#f06092'); arc(200,230,50,50,0,180);

  //Text
 fill('purple');
 strokeWeight(0);
  textSize(15);
  text('We will customize this\ntext later on in the\nproject to reflect your avatar',20,20);
  
  //Directions for mouse press
  textSize(15);
  text('Click to see\nme wink.',width-100,height-40);
  
}