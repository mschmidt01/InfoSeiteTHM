var tl = new TimelineMax({paused:true});
var drag = document.getElementById('green_arrow');
var apear = document.getElementById('grey_arrow')
var dragSpeed = 2;

tl.add(TweenMax.to(drag, dragSpeed, {top:110}));
tl.add(TweenMax.from(apear, dragSpeed, { ease: Power4.easeOut, y: 1500 }));


function dragdown(MouseEvent){
  tl.tweenTo(3.5);
}

function dragup(MouseEvent){
  tl.tweenTo(0);
}
