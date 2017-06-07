define(function(){


  var otu = document.getElementsByClassName("tu")[0],
      cvs = document.createElement("canvas"),
      outter = document.getElementById("outter");

  outter.parentNode.appendChild(cvs);
  cvs.id = "theCvs";
  cvs.style.display = "none";

  var context = cvs.getContext("2d");//2d上下文

  html2canvas(outter,{
    canvas: cvs,
    onrendered: function(c){
      // cvs.width *= 2;
      // cvs.height *= 2;
      // c.getContext("2d").context.scale(2,2);
    }
  });

});
