$(function () {
    var canvas=$("canvas")[0];
    var cobj=canvas.getContext("2d");
    window.onresize=function () {
        canvas.width=document.documentElement.clientWidth;
        canvas.height=document.documentElement.clientHeight;
    }
    window.onresize();
    //首先定义函数，规定运动用到的一些参数
    function yyt() {
        this.cobj = cobj;
        this.x = 1000;
        this.y = 600;
        // this.ax=Math.random()*0.0005;
        // this.ay=-0.1;
        // this.speedx =Math.random()*2 -1;
        // this.speedy =-2*Math.random();
        this.color = "salmon";

        // this.x=2*Math.random()+50;
        // this.y=80;
        this.r=Math.random()*6;
        this.speedx=Math.random()*0.4-0.2;
        this.speedy=-5;
        this.ax=0.1*Math.random()-0.05;
        this.ay=-0.1;
        this.ar=0.1;
    }
    //然后再函数的原型上定义画图和再画图的方法
    yyt.prototype={
        go: function () {
            var cobj = this.cobj;
            cobj.save();
            cobj.beginPath();
            cobj.fillStyle = this.color;
            //translate() 方法转换画布的用户坐标系统。
            cobj.translate(this.x,this.y);
            // cobj.rect(0,0,1,1);
            cobj.arc(0,0,this.r,0,2*Math.PI)
            cobj.fill();
            cobj.restore()
        },
        update:function () {
            // if (this.speedx <= 0){
            //     this.ax = -this.ax
            // }
            this.speedx+=this.ax;
            this.speedy+=this.ay;
            this.x+=this.speedx;
            this.y+=this.speedy;
        }
    }


    var history = [];
    setInterval(function () {
        var obj = new yyt;
        history.push(obj);
        if(history.length>85){
            history.splice(85,history.length-85)
        }
        cobj.clearRect(0,0,2000,1000)
        for (var i=0;i<history.length;i++){
            history[i].go();
            history[i].update();
            if(history[i].y<-200){
                history[i]=new yyt();
            }
        }
    },30)
})