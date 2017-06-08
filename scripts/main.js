
require(["scripts/h2c"],function(h2c){


    var flag = false,
        omag = document.getElementsByClassName("tu")[0],
        cvsShow = document.createElement("canvas"),
        ctxShow = cvsShow.getContext("2d");

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
      omag.style.display = "none";
      flag = false;
    });

    document.addEventListener("mousemove",function(event){

      if(flag){
        ctxShow.clearRect(0,0,100,80);
        event.preventDefault();
        event.stopPropagation();

// 计算外框位置：
        omag.style.left = event.clientX - 50 + "px";
        omag.style.top = event.clientY - 120 + "px";


// 计算内部canvas偏移：
// canvas名字没有会自动创建，但被照相的div需要已经存在与页面中。
        h2c("theCvs","outter",event.clientX,event.clientY);

        h2c("theCvs2","outter2",event.clientX,event.clientY);

      }

    });

});
