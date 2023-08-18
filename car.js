// declare the Car class
class Car{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.speed=0;
        this.acceleration=0.2;
        this.maxSpeed=3;
        this.friction=0.05;
        this.angle=0;

        this.controls=new Controls();
    }

    update(){
        this.#move();
    }

    #move(){
        if(this.controls.forward){
            this.speed+=this.acceleration; // move car forward
        }
        if(this.controls.reverse){
            this.speed-=this.acceleration; // move car backwards
        }

        if(this.speed>this.maxSpeed){
            this.speed=this.maxSpeed; // limit the forward speed of the car
        }
        if(this.speed<-this.maxSpeed/2){ 
            this.speed=-this.maxSpeed/2;  // limit the reverse speed of the car
        }

        if(this.speed>0){
            this.speed-=this.friction;
        }                               // add friction to smooth out movement
        if(this.speed<0){
            this.speed+=this.friction;
        }

        if(Math.abs(this.speed)<this.friction){
            this.speed=0; /* if the speed of the car is less than the friction coefficient
                            stop the car - without this the car may keep moving a tiny amount */ 
        }

        if(this.speed!=0){
            const flip=this.speed>0?1:-1; // check if the car is moving forward or reverse
                if(this.controls.left){  
                    this.angle+=0.03*flip; // move the car left - flip controls in reverse
                }
                if(this.controls.right){
                    this.angle-=0.03*flip; // move the car right - flip controls in reverse
                }
       
            }
        
        this.x-=Math.sin(this.angle)*this.speed; // rotate the car left or right (sin/cos of angle)
        this.y-=Math.cos(this.angle)*this.speed; // based on the speed of the car
    }

    // declare the draw method
    draw(ctx){
        ctx.save();                     // set sideways movement angles
        ctx.translate(this.x,this.y);
        ctx.rotate(-this.angle);

        ctx.beginPath();
        ctx.rect(
            -this.width/2,
            -this.height/2,
            this.width,
            this.height
        );
        ctx.fill();

        ctx.restore(); // reset default parameters after each movement
    }
}