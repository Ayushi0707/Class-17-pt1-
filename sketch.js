var b1,b2
function setup() 
{
  createCanvas(400, 400);
  b1 = new Box(40,50,90,90,0,4);
  b2 = new Box(40,50,90,90,0,-4)
}

function draw() 
{
  background(220);
b1.show();
b2.show();

b1.movevertical();
b2.movevertical();
}

