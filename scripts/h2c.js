define(function(){
    return function(cvsId,shotDivName,clientX,clientY){
        var outter = document.getElementById(shotDivName);
        if(document.getElementById(cvsId) == undefined){
            var cvs = document.createElement("canvas");
            outter.parentNode.appendChild(cvs);
            cvs.id = cvsId;
            cvs.style.display = "none";
        }else{
            cvs = document.getElementById(cvsId);
        }


        html2canvas(outter,{
          canvas: cvs,
        });

        var context = cvs.getContext("2d");

        var tmpImg = context.getImageData(clientX-50,clientY-40,100,80),
            cvsTmp = document.createElement("canvas"),
            ctxTmp = cvsTmp.getContext("2d"),
            cvsShow = document.getElementById("cvsShow"),
            ctxShow = cvsShow.getContext("2d");

        ctxTmp.putImageData(tmpImg,0,0);
        ctxShow.drawImage(cvsTmp,0,0);

        cvsTmp = null;
        ctxTmp = null;
    };
});
