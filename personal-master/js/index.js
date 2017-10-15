$(function () {
    function lizi() {
        var canvas=$("canvas")[0];
        canvas.width=100;
        canvas.height=80;
        var cobj=canvas.getContext("2d")
        function bubble() {
            this.x=2*Math.random()+50;
            this.y=80;
            this.r=Math.random()*3;
            this.speedx=Math.random()-0.5;
            this.speedy=-2;
            this.ax=0.2*Math.random()-0.1;
            this.ay=-0.2;
            this.ar=0.1;
            this.color="rgba(178,220,255,"+Math.random()+")"
        }
        bubble.prototype={
            draw:function () {
                cobj.save();
                cobj.beginPath()
                cobj.fillStyle=this.color
                cobj.translate(this.x,this.y);
                cobj.arc(0,0,this.r,0,2*Math.PI)
                cobj.fill();
                cobj.restore()
            },
            update:function () {
                this.speedx+=this.ax
                this.speedy+=this.ay;
                this.r+=this.ar
                this.x+=this.speedx
                this.y+=this.speedy
            }
        }

        var history=[];
        setInterval(function () {
            var obj=new bubble();
            history.push(obj);
            if(history.length>30){
                history.splice(30,history.length-30)
            }
            cobj.clearRect(0,0,100,80)
            for (var i=0;i<history.length;i++){
                history[i].draw();
                history[i].update();
                if(history[i].y<-80){
                    history[i]=new bubble();
                }
            }
        },60)
    }
    lizi()

    // var height=$(window).height()
    $(".con_one").scroll(function () {
        if($(window).scrollTop()>0){
            alert(1)
            $(".con_one").css("animate","")
        }else if($(window).scrollTop()==0){
            alert(2)
            $(".con_one").css("animate","love 3s ease")
        }
    })


})