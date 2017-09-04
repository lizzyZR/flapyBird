function Land(info){
    this.image = info.image;
    this.x = info.x;
    this.context = info.context;
    this.canvas = info.canvas;
    this.speed = 2;
}
Land.prototype = {
    constructor:Land,
    draw:function (){
        this.x -= this.speed;
        if(this.x <= -this.image.width){
            this.x = this.image.width*3;
        }
        this.context.drawImage(this.image,this.x,this.canvas.height-this.image.height,this.image.width,this.image.height);
    }
}