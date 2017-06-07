define(function(){


  var otu = document.getElementsByClassName("tu")[0],
      cvs = document.createElement("canvas"),
      outter = document.getElementById("outter");
  otu.appendChild(cvs);
  cvs.id = "theCvs";

  cvs.width = outter.offsetWidth * 2;
  cvs.height = outter.offsetHeight * 2;
  cvs.style.width = outter.offsetWidth;
  cvs.style.height = outter.offsetHeight;

  // var context = cvs.getContext("2d");//2d上下文


  html2canvas(outter,{
    canvas: cvs,
    // height: 1000,
    // width: 1000,
    onrendered: function(c){
      // cvs.width *= 2;
      // cvs.height *= 2;
    //   c.getContext("2d").context.scale(2,2);
    }
  });

});
