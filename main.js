// set up the layout of the road
const canvas=document.getElementById("myCanvas");
canvas.height=window.innerHeight;
canvas.width=200;

// set 2d context
const ctx = canvas.getContext("2d");

// construct and draw the car
const car = new Car(100,100,30,50);
car.draw(ctx);
