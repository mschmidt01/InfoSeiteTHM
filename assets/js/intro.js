var timeline = new TimelineMax();

timeline.from('#bottom', 1, {opacity:0.0});
timeline.from('#left', 1, {opacity:0.0});
timeline.from('#top', 1, {opacity:0.0});

timeline.add(TweenMax.from('#studiere_an', 1.5, { ease: Power4.easeOut, x: -500 }),"-=1");
timeline.add(TweenMax.from('#medieninformatik', 1.5, { ease: Power4.easeOut, x: 500 }),"-=1.5");


timeline.add(TweenMax.from('#studienziel', 5, { ease: Power4.easeOut, x: 1000 }),"-=1.5");
timeline.add(TweenMax.from('#studienziel_li_1', 5.5, { ease: Power4.easeOut, x: 1000 }),"-=5.5");
timeline.add(TweenMax.from('#studienziel_li_2', 4.5, { ease: Power4.easeOut, x: 1000 }),"-=4.5");
timeline.add(TweenMax.from('#studienziel_li_3', 3.5, { ease: Power4.easeOut, x: 1000 }),"-=3.5");
timeline.add(TweenMax.from('#studienziel_li_4', 2.5, { ease: Power4.easeOut, x: 1000 }),"-=2.5");

timeline.add(TweenMax.from('#meta_info', 8, { ease: Power4.easeOut, x: -2000 }),"-=5.5");



timeline.add(TweenMax.from('#button_MA', 2, {ease: Power4.easeOut, x: -1000}),"-=5");
timeline.add(TweenMax.from('#button_MA',0.1,{css:{zIndex:0}}));
timeline.add(TweenMax.from('#button_MP', 2, { ease: Power4.easeOut, x: 1000 }),"-=5.5");

timeline.add(TweenMax.from('#meta_info_text', 2, { opacity:0.0}),"-=5");

timeline.add(TweenMax.staggerFrom(".logo_bit",2,{opacity:0.0},0.2),"-=5");
