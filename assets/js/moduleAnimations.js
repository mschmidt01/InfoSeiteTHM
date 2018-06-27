$(document).ajaxComplete(function() {
// @TODO fix this to work with delegated events as to also catch events for dynamically created modules…
// use this as a starting point:
$('.Verlaufsplan').on('click', '.modul', function(e) {
    let eventTarget = $(e.target).parents('.modul').first();
    let moduleId = parseInt($(eventTarget).data('moduleid'))
    let moduleData = getModuleInfo(moduleId)

    loadModuleInfoIntoPopup(moduleData);

    $(eventTarget).css("z-index","1");
    //create a timeline for the current box
    var tl = new TimelineLite({
        paused: true
    });
    var popup = $(".popup");
    tl.to($(eventTarget), 1, {
        rotationY: 90,
        x: (viewportWidth / 2 - $(eventTarget)[0].getBoundingClientRect().left - $(eventTarget).width() / 2),
        y: (viewportHeight / 2 - $(eventTarget)[0].getBoundingClientRect().top - $(eventTarget).height() / 2),
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

    eventTarget.animation = tl;
    $(eventTarget).css("z-index","8");
    eventTarget.animation.play();

    $(".popup").click(function(event) {
        eventTarget.animation.reverse();
    });
})


var modules = $(".modul");
sortByX = function(a, b) {
    return a.getBoundingClientRect().left - b.getBoundingClientRect().left
};

sortByY = function(a, b) {
    return a.getBoundingClientRect().top - b.getBoundingClientRect().top
};

modules.sort(sortByY);
modules.sort(sortByX);


TweenMax.staggerFromTo(modules, 1, {
    scaleX: 0.1,
    scaleY:0.1,
    ease: Power3.easeOut,
    autoAlpha:0
},{ scaleX: 1,
    scaleY:1,
    autoAlpha:1
}, 0.05);
TweenMax.set($(".popup"), {
    rotationY: -90
});

viewportWidth = $(window).width();
viewportHeight = $(window).height();
});

loadModuleInfoIntoPopup = (moduleData) => {
    for (var key in moduleData) {
        $('.popup #module-' + key).html(moduleData[key]);
    }
}