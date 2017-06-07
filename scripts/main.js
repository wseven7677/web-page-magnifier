
require(["scripts/chromeSnapShot","scripts/h2c"],function(chromeSnapShot,h2c){


    var flag = false,
        omag = document.getElementsByClassName("tu")[0],
        cvsTmp = document.createElement("canvas"),
        ctxTmp = cvsTmp.getContext("2d"),
        cvsShow = document.createElement("canvas"),
        ctxShow = cvsShow.getContext("2d");


    cvsTmp.width = 100;
    cvsTmp.height = 80;

    cvsShow.width = 200;
    cvsShow.height = 160;
    cvsShow.style.left = - 50 + "px";
    cvsShow.style.top = - 40 + "px";
    cvsShow.id = "cvsShow";
    ctxShow.scale(2,2);
    omag.appendChild(cvsShow);


    document.addEventListener("mousedown",function(event){
      omag.style.display = "block";
      flag = true;
    });
    document.addEventListener("mouseup",function(event){
      ctxTmp.clearRect(0,0,100,80);
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
        var omagCvs = document.getElementById("theCvs"),
            omagCtx = omagCvs.getContext("2d"),
            outter = document.getElementById("outter");
        var posx,
            posy;
        posx = event.clientX - outter.offsetLeft;
        posy = event.clientY - outter.offsetTop;

        var tmpImg = omagCtx.getImageData(posx-50,posy-40,100,80);
        ctxTmp.putImageData(tmpImg,0,0);
        ctxShow.drawImage(cvsTmp,0,0);

      }

    });

});
