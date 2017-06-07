
require(["scripts/h2c"],function(h2c){

    var flag = false;

    document.addEventListener("mousedown",function(event){

      flag = true;
    });
    document.addEventListener("mouseup",function(event){

      flag = false;
    });

    document.addEventListener("mousemove",function(event){

      if(flag){
        event.preventDefault();
        event.stopPropagation();

// 计算外框位置：
        var omag = document.getElementsByClassName("tu")[0];
        omag.style.left = event.clientX - 50 + "px";
        omag.style.top = event.clientY - 90 + "px";

// 计算内部canvas偏移位置：
        var omagCvs = document.getElementById("theCvs"),
            outter = document.getElementById("outter");
        var posx,
            posy;
        posx = event.clientX - outter.offsetLeft;
        posy = event.clientY - outter.offsetTop;

        omagCvs.style.left = - posx + 50 + "px";
        omagCvs.style.top = - posy + 40 + "px";


        // var ocanvas = document.getElementById("theCvs");
        // var context = ocanvas.getContext("2d");//2d上下文
        //
        // ocanvas.scale(2,2);

      }

    });

});
