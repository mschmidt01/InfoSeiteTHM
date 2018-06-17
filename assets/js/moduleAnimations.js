// Module-overview fade in Animation
modules = $(".modul");
sortByX = function(a, b) {
    return a.getBoundingClientRect().left - b.getBoundingClientRect().left
};

sortByY = function(a, b) {
    return a.getBoundingClientRect().top - b.getBoundingClientRect().top
};

modules.sort(sortByY);
modules.sort(sortByX);


TweenMax.staggerFromTo(modules, 2, {
    scaleX: 0.1,
    scaleY:0.1,
    ease: Power3.easeOut,
},{ scaleX: 1,
    scaleY:1,
    autoAlpha:1
}, 0.05);
TweenMax.set($(".popup"), {
    rotationY: -90
});

viewportWidth = $(window).width();
viewportHeight = $(window).height();

// Modul Flip Description Animation
$(".modul").each(function() {
    $(this).css("z-index","1");
    //create a timeline for each box
    var tl = new TimelineLite({
        paused: true
    });
    var popup = $(".popup");
    tl.to($(this), 1, {
        rotationY: 90,
        x: (viewportWidth / 2 - $(this)[0].getBoundingClientRect().left - $(this).width() / 2),
        y: (viewportHeight / 2 - $(this)[0].getBoundingClientRect().top - $(this).height() / 2),
    })
        .to(popup, 0.8, {
            x: (viewportWidth / 2 - popup.width() / 2),
            y: (viewportHeight / 2  - popup.height() / 2),
            scaleX: 1,
            scaleY: 1,
            rotationY: 0,
            autoAlpha: true
        }, "-=0.3")
        .to($(".overlay"), 0.8, {
            autoAlpha: true
        }, "-=1");

    this.animation = tl;

    $(".modul").click(function(event) {
        $(this).css("z-index","8");
        this.animation.play();
        //set current animation to this box's animtion
        currentAnimation = this.animation;

    });

    $(".popup").click(function(event) {
        if (currentAnimation) {
            //if there is a currentAnimation reverse it
            currentAnimation.reverse();
        }

    });


});