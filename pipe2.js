function Pipe2(info){
    this.topImage = info.topImage;
    this.bottomImage = info.bottomImage;
    this.x = info.x;
    this.context = info.context;
    this.canvas = info.canvas;
    this.speed = 2;
    this.gap = info.gap;
    //�����ܵ��ļ�϶
    this.space = 80;
    this.bottomOffset = info.bottomOffset;
    //���������ܵ��ĸ߶�
    this.topHeight = 0;
    this.bottomHeight = 0;
    this.initHeight();
}
Pipe2.prototype = {
    constructor:Pipe2,
    draw:function (){
        this.x -= this.speed;
        if(this.x <= -this.topImage.width){
            this.x = this.topImage.width * 5 + this.gap *6;
        }
        this.context.drawImage(this.topImage,this.x,0,this.topImage.width,this.topHeight);
        this.context.drawImage(this.bottomImage,this.x,this.topHeight + this.space,this.bottomImage.width,this.bottomHeight);
        this.context.rect(this.x,0,this.topImage.width,this.topHeight);
        this.context.rect(this.x,this.topHeight + this.space,this.bottomImage.width,this.bottomHeight);
    },
    initHeight:function (){
        this.topHeight = Math.random()*150 + 100;
        this.bottomHeight = this.canvas.height - this.topHeight - this.space - this.bottomOffset;
    }
}
