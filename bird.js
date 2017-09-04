function Bird(info){
    this.context = info.context;
    this.canvas = info.canvas;
    this.index = 0;
    this.image = info.image;
    this.w = this.image.width/3;
    this.h = this.image.height;
    this.x = info.x;
    this.y = info.y;
    this.aspeed = 0.0005;
    this.speed = 0;
    this.startTime = new Date();
    this.maxspeed = 0.6;
    this.maxangle = 45;
}
Bird.prototype = {
    constructor:Bird,
    draw:function (){
        this.index++;
        var indexx = this.index % 3;
        var nowTime = new Date();
        var delayTime = nowTime - this.startTime;
        var s = this.speed * delayTime + this.aspeed * delayTime * delayTime /2;
        this.y += s;
        this.speed = this.speed + this.aspeed * delayTime;
        this.startTime = nowTime;
        this.context.save();
        this.context.translate(this.x+this.w/2,this.y+this.h/2);
        var percent = this.speed/this.maxspeed;
        var radian = percent * this.maxangle /180 * Math.PI;
        this.context.rotate(radian);
        this.context.drawImage(birds,indexx*this.w,0,this.w,this.h,-this.w/2,-this.h/2,this.w,this.h);
        context.restore();
    }
}