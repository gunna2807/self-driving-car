// set up the layout of the road
const canvas=document.getElementById("myCanvas");
canvas.width=200;

// set 2d context
const ctx = canvas.getContext("2d");

// construct and draw the car
const car = new Car(100,100,30,50);
car.draw(ctx);

// set the animation of the car
animate();

function animate(){
    car.update();
    canvas.height=window.innerHeight;
    car.draw(ctx);
    requestAnimationFrame(animate); /* calls animate many times per second -
                                        giving the illusion of movement */
}