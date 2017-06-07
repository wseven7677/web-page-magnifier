
require(["scripts/tmp"],function(tmp){


    var flag = false,
        omag = document.getElementsByClassName("tu")[0],
        theScale = 1.5;


    document.addEventListener("mousedown",function(event){
      omag.style.display = "block";
      flag = true;
    });
    document.addEventListener("mouseup",function(event){
      omag.style.display = "none";
      flag = false;
    });

    document.addEventListener("mousemove",function(event){

      if(flag){
        event.preventDefault();
        event.stopPropagation();

// 计算外框位置：
        omag.style.left = event.clientX - 50 + "px";
        omag.style.top = event.clientY - 90 + "px";

// 计算内部canvas偏移位置：
        var outter = document.getElementById("outter"),
            snapShotImg = document.getElementById("snapShotImg");
        var posx,
            posy;
        posx = event.clientX - outter.offsetLeft;
        posy = event.clientY - outter.offsetTop;

        snapShotImg.style.left = - posx + 50 + 'px';
        snapShotImg.style.top = - posy + 40 + 'px';


      }

    });

});
