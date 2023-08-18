class Road{
    constructor(x,width,laneCount=4){
        this.x=x;
        this.width=width;
        this.laneCount=laneCount;

        this.left=x-width/2;
        this.right=x+width/2;

        const infinity=1000000;
        this.top=-infinity;
        this.bottom=infinity;
    }



    draw(ctx){
        ctx.lineWidth=5;
        ctx.strokeStyle="white";

        // set up position of lanes based on number of lanes
        for(let i=0;i<=this.laneCount;i++){
            const x=lerp(
                this.left,
                this.right,
                i/this.laneCount
            );
            if(i>0 && i<this.laneCount){
                ctx.setLineDash([20,20]); // make inner lines dashed
            }else{
                ctx.setLineDash([]); // leave outer lines solid
            }

            ctx.beginPath();
            ctx.moveTo(x,this.top);
            ctx.lineTo(x,this.bottom);
            ctx.stroke();
        }     
    }
}
