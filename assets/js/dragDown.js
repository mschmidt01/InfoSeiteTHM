var tl = new TimelineMax({paused:true});
var drag = document.getElementById('green_arrow');
var apear = document.getElementById('grey_arrow')
var dragSpeed = 2;


tl.add(TweenMax.to(drag, 0.1, {css:{zIndex:75}}));
tl.add(TweenMax.to(drag, dragSpeed, {top:110}));
tl.add(TweenMax.from(apear, dragSpeed, { ease: Power4.easeOut, y: 1500 }));
tl.add(TweenMax.staggerFrom(".logo_bit",2,{opacity:0.0},0.2),"-=2");
tl.add(TweenMax.to(".logo_bit",2,{opacity:0.0},0.2),"-=1");
tl.add(TweenMax.from(".zusatz_button_container",3,{opacity:0.0}),"-=1.5");



function dragdown(MouseEvent){
  tl.tweenTo(10);
}

function dragup(MouseEvent){
  tl.tweenTo(0);
}
