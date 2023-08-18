// set up the layout of the road
const canvas=document.getElementById("myCanvas");
canvas.width=200;

// set 2d context
const ctx = canvas.getContext("2d");

// instantiate the road class
const road=new Road(canvas.width/2,canvas.width*0.9);

// instantiate the car class and call the draw method
const car = new Car(road.getLaneCentre(1),100,30,50);
car.draw(ctx);

// set the animation of the car
animate();

function animate(){
    car.update();

    canvas.height=window.innerHeight;

    ctx.save();
    ctx.translate(0,-car.y+canvas.height*0.7);

    road.draw(ctx);
    car.draw(ctx);

    ctx.restore();
    requestAnimationFrame(animate); /* calls animate many times per second -
                                        giving the illusion of movement */
}