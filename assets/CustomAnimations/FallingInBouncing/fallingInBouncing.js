/*Every div or other html-element can be tweened seperately or in a timeline*/


var timeline1 = new TimelineMax({repeat:0}); /*Creates new timeline. Repeat0 -> animation runs once*/
/*
If animation is supposed to start after or at a specifiv time:

timeline1.delay(value: );  *   sets the time at which the animation begins on after site is loaded
timeline1.startTime( value:) : *  sets the time at which the animation begins on its parent timeline (after any delay that was defined).
*/

timeline1.add(TweenMax.to("#T", 3, { ease: Bounce.easeOut, top: '50%', opacity: 1.0 }) );
timeline1.add(TweenMax.to("#H", 3, { ease: Bounce.easeOut, top: '50%', opacity: 1.0,}), "-=2");
timeline1.add(TweenMax.to("#M", 3, { ease: Bounce.easeOut, top: '50%', opacity: 1.0 }), "-=2");


/* or..
TweenMax.to("#T", 3, { ease: Bounce.easeOut, top: '50%', opacity: 1.0 });
TweenMax.to("#H", 3, { ease: Bounce.easeOut, top: '50%',delay: 1, opacity: 1.0 });
TweenMax.to("#M", 3, { ease: Bounce.easeOut, top: '50%',delay: 2, opacity: 1.0 });
*/
