var position = 0;
var velocity = 100;
var reverse = true;
var ball1 = document.getElementById('ball1');
var ball2 = document.getElementById('ball2');

//side to side movement purple to orange
//------------------------------------------
function moveBall()
{
  let max = 500;
  let min = 0;  

  if (reverse) 
  {
    position = position + velocity;
    ball1.style.left = position + "px";
    ball1.style.background = "purple";
  }
  else 
  {
    position = position - velocity; 
    ball1.style.left = position + "px";
    ball1.style.background = "orange";
  }

  if (position > max || position === min) 
  {
    reverse = !reverse;
  }
}
//-------------------------------------------


// Diagonal Movement
//-------------------------------------------
function diagonal1()
{
  // X axis  
  let posX1 = 45; 
  const maxX1 = 800;
  const minX1 = 0;
  
  //Y axis
  let posY1 = 200; 
  const maxY1 = 800;
  const minY1 = 200;

  const velX1 = 50;
  const velY1 = 50;
  if (reverse) 
  {
    posX1 = posX1 + velX1;
    posY1 = posY1 + velY1;
    ball2.style.left = posX1 + "px";
    ball2.style.top = posY1 + "px";
    ball2.style.background = "lightseagreen";
  }
  else 
  {
    posX1 = posX1 - velX1;
    posY1 = posY1 - velY1;
    ball2.style.left = posX1 + "px";
    ball2.style.top = posY1 + "px";
    ball2.style.background = "greenyellow";
  }

  if (posX1 > maxX1 || posX1 === minX1 || posY1 > maxY1 || posY1 === minY1) 
  {
    reverse = !reverse;
  }
}
//--------------------------------------------

// Diagonal Movement #2
//-------------------------------------------
function diagonal2()
{
  // X axis  
  let posX2 = 90; 
  const maxX2 = 1000;
  const minX2 = 0;
  
  //Y axis
  let posY2 = 200; 
  const maxY2 = 800;
  const minY2 = 200;

  const velX2 = 50;
  const velY2 = 50;
  if (reverse) 
  {
    posX2 = posX2 + velX2;
    posY2 = posY2 + velY2;
    ball3.style.left = posX2 + "px";
    ball3.style.top = posY2 + "px";
    ball3.style.background = "lightseagreen";
  }
  else 
  {
    posX2 = posX2 - velX2;
    posY2 = posY2 - velY2;
    ball3.style.left = posX2 + "px";
    ball3.style.top = posY2 + "px";
    ball3.style.background = "greenyellow";
  }

  if (posX2 > maxX2 || posX2 === minX2 || posY2 > maxY2 || posY2 === minY2) 
  {
    reverse = !reverse;
  }
}
//--------------------------------------------

// Diagonal Movement #3
//-------------------------------------------
function diagonal3()
{
  // X axis  
  let posX3 = 135; 
  const maxX3 = 1000;
  const minX3 = 0;
  
  //Y axis
  let posY3 = 200; 
  const maxY3 = 800;
  const minY3 = 200;

  const velX3 = 50;
  const velY3 = 50;
  if (reverse) 
  {
    posX3 = posX3 + velX3;
    posY3 = posY3 + velY3;
    ball4.style.left = posX3 + "px";
    ball4.style.top = posY3 + "px";
    ball4.style.background = "lightseagreen";
  }
  else 
  {
    posX3 = posX3 - velX3;
    posY3 = posY3 - velY3;
    ball4.style.left = posX3 + "px";
    ball4.style.top = posY3 + "px";
    ball4.style.background = "greenyellow";
  }

  if (posX3 > maxX3 || posX3 === minX3 || posY3 > maxY3 || posY3 === minY3) 
  {
    reverse = !reverse;
  }
}
//--------------------------------------------

// reverse diagonal
//--------------------------------------------
function revdiagonal()
{
  // X axis  
  let posX4 = 500; 
  const maxX4 = 1000;
  const minX4 = 0;
  
  //Y axis
  let posY4 = 200; 
  const maxY4 = 800;
  const minY4 = 200;

  const velX4 = 50;
  const velY4 = 50;
  if (reverse) 
  {
    posX4 = posX4 - velX4;
    posY4 = posY4 - velY4;
    ball5.style.left = posX4 + "px";
    ball5.style.top = posY4 + "px";
    ball5.style.background = "grey";
  }
  else 
  {
    posX4 = posX4 + velX4;
    posY4 = posY4 + velY4;
    ball5.style.left = posX4 + "px";
    ball5.style.top = posY4 + "px";
    ball5.style.background = "black";
  }

  if (posX4 > maxX4 || posX4 === minX4 || posY4 > maxY4 || posY4 === minY4) 
  {
    reverse = !reverse;
  }
}

// reverse diagonal #2
//--------------------------------------------
function revdiagonal2()
{
  // X axis  
  let posX5 = 545; 
  const maxX5 = 1000;
  const minX5 = 0;
  
  //Y axis
  let posY5 = 200; 
  const maxY5 = 800;
  const minY5 = 200;

  const velX5 = 50;
  const velY5 = 50;
  if (reverse) 
  {
    posX5 = posX5 - velX5;
    posY5 = posY5 - velY5;
    ball6.style.left = posX5 + "px";
    ball6.style.top = posY5 + "px";
    ball6.style.background = "grey";
  }
  else 
  {
    posX5 = posX5 + velX5;
    posY5 = posY5 + velY5;
    ball6.style.left = posX5 + "px";
    ball6.style.top = posY5 + "px";
    ball6.style.background = "black";
  }

  if (posX5 > maxX5 || posX5 === minX5 || posY5 > maxY5 || posY5 === minY5) 
  {
    reverse = !reverse;
  }
}

//up and down movement 
//------------------------------------------
function upAndDown()
{
  //Y axis only
  let posY6 = 200; 
  const maxY6 = 800;
  const minY6 = 200;

  const velY6 = 50; 

  if (reverse) 
  {
    posY6 = posY6 + velY6;
    ball7.style.background = "coral";
  }
  else 
  {
    posY6 = posY6 - velY6; 
    ball7.style.background = "cornflowerblue";
  }

  if (posY6 > maxY6 || posY6 === minY6) 
  {
    reverse = !reverse;
  }
}
//-------------------------------------------


setInterval(moveBall,100);
setInterval(diagonal1,100);
setInterval(diagonal2,100);
setInterval(diagonal3,100);
setInterval(revdiagonal,100);
setInterval(revdiagonal2,100);
setInterval(upAndDown,100);