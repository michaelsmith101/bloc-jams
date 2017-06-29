//Global Scope
var points = document.getElementsByClassName('point');
//Selling Points Animation
var animatePoints = function() {

  var revealPoint = function(index){
    points[index].style.opacity = 1;
    points[index].style.transform = "scaleX(1) translateY(0)"
    points[index].style.mstransform = "scaleX(1) translateY(0)"
    points[index].style.Webkittransform = "scaleX(1) translateY(0)"
  };

  for (i=0;i<points.length;i++){
    revealPoint(i);
  }
};
//Event Listeners
  window.onload = function() {

    //Animate automatically if the scren is tall
    if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }

    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

     window.addEventListener('scroll', function(event) {
         if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
            animatePoints(pointsArray);
        }
     });
 }

//
