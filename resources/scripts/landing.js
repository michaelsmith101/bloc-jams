//Global Scope
var pointsArray = document.getElementsByClassName('point');

var revealPoint = function(point){
  point.style.opacity = 1;
  point.style.transform = "scaleX(1) translateY(0)";
  point.style.mstransform = "scaleX(1) translateY(0)";
  point.style.Webkittransform = "scaleX(1) translateY(0)";
};

//Selling Points Animation
var animatePoints = function(points) {
  forEach(points, revealPoint);
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
