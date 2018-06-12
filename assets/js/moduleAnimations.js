modules = document.getElementsByClassName("modul");
popup = document.getElementsByClassName("popup");
viewportWidth = $(window).width();
viewportHeight = $(window).height();
TweenMax.set($(".popup"), {rotationY: -180});
for (var i = 0; i < modules.length; i++) {
    modules[i].addEventListener("click", moduleDescriptionAnimation(modules[i]));
}

function moduleDescriptionAnimation(module) {

    return function () {

        var tl = new TimelineLite();
        front = $(this).children(".modul-front");
        back = $(this).children(".popup");

            tl.to(front, 1, {
                rotationY: 90,
                x: (viewportWidth / 2 - module.getBoundingClientRect().left - $(module).width() / 2),
                y: (viewportHeight / 2 - module.getBoundingClientRect().top - $(module).height() / 2),
                visible: 0
            }).to(popup, 1, {
                x: (viewportWidth / 2 - back.get(0).getBoundingClientRect().left - back.width() / 2),
                y: (viewportHeight / 2 - back.get(0).getBoundingClientRect().top - back.height() / 2),
                scaleX: 1,
                scaleY: 1,
                rotationY: 0,
                opacity: 1,
                autoAlpha: true
            }, "-=0.5");


    };
}