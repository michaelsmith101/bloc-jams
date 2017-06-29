//Selling Points Animation
var animatePoints = function() {

  var points = document.getElementsByClassName('point');

<<<<<<< HEAD
  for (var i=0;i<points.length;i++){
    points[i].style.opacity = 1;
    points[i].style.transform = "scaleX(1) translateY(0)"
    points[i].style.mstransform = "scaleX(1) translateY(0)"
    points[i].style.Webkittransform = "scaleX(1) translateY(0)"
=======
  var revealPoint = function(index){
    points[index].style.opacity = 1;
    points[index].style.transform = "scaleX(1) translateY(0)"
    points[index].style.mstransform = "scaleX(1) translateY(0)"
    points[index].style.Webkittransform = "scaleX(1) translateY(0)"
  }

  for (i=0;i<points.length;i++){
    revealPoint(i);
>>>>>>> checkpoint-7-DOM1
  }

};
//
