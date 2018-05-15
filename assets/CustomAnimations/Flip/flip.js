//This animation "flips" a content on the Y-Axis. The flip-effect can also be transformed to the X-Axis. The content always consists of two elements.
var front = document.getElementById('front');
var back = document.getElementById('back');
var flipSpeed = 1;
var tl = new TimelineMax({paused:true});



//Turns the Front of the div by 90Â°. The element ist set to visible false as soon as it reached the specified rotationY. Sometimes the console may declare it invalid, but it is necessary and works!
tl.append(TweenMax.to(front, flipSpeed, {rotationY:90, visible:false,ease:Linear.easeNone}));

//First thhis will position the Back of the div at the endposition of the Front. Then it continues to rotate the div. Visibility s.a.
tl.append(TweenMax.fromTo( back, flipSpeed, {rotationY:-90, visible:false}, {rotationY:0, alpha:1, ease:Linear.easeNone} ));


//Functions to be called on click. Playing the animation till the specified time is reached.
//The speed only has to be set once in the variable above, later it can be made accesseble as the function is called.
  function showBack(MouseEvent){
    tl.tweenTo(flipSpeed*2);
  }

  function showFront(MouseEvent){
    tl.tweenTo(0);
}
