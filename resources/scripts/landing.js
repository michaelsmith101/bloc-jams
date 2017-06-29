//Global Variables
var pointsArray = document.getElementsByClassName('point');
//Selling Points Animation
var animatePoints = function(points) {
  for (var i=0;i<points.length;i++){
    points[i].style.opacity = 1;
    points[i].style.transform = "scaleX(1) translateY(0)"
    points[i].style.mstransform = "scaleX(1) translateY(0)"
    points[i].style.Webkittransform = "scaleX(1) translateY(0)"
  }
};
//Adding the scroll event
window.onload = function() {
  //automatically perform the animation if the users screen is taller than 950px
  if (window.innerHeight > 950){
    animatePoints(pointsArray);
  }
  //if not perform an animation on scroll when they reach 200px below the fold
  var sellingPoints = document.getElementsByClassName('selling-points')[0];
  var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

  window.addEventListener('scroll', function(event){
    if(document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance){
      animatePoints(pointsArray);
    }
  });

}
