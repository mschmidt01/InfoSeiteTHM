$(document).ajaxComplete(function() {
// @TODO fix this to work with delegated events as to also catch events for dynamically created modules…
// use this as a starting point:
$('.Verlaufsplan').on('click', '.modul', function(e) {
    e.preventDefault();
    let eventTarget = $(e.target).parents('.modul').first();
    let moduleId = parseInt($(eventTarget).data('moduleid'))
    let moduleData = getModuleInfo(moduleId)
    let moduleFront = $(eventTarget).find(".front");
    let  popup = $(".popup");
    popup.center();
    loadModuleInfoIntoPopup(moduleData);

     $(eventTarget).css("z-index","8");
    //create a timeline for the current box
    var tl = new TimelineLite({
        paused: true
    });

    tl.to($(eventTarget), 1, {
        rotationY: 180,
        x: (viewportWidth / 2 - $(eventTarget)[0].getBoundingClientRect().left - $(eventTarget).width() / 2),
        y: (viewportHeight / 2 - $(eventTarget)[0].getBoundingClientRect().top - $(eventTarget).height() / 2),
        scaleX: 1.5,
        scaleY: 1.5,
    }).to(moduleFront, 0, {
       autoAlpha:0,
    },"-=0.7")
    .fromTo(popup, 0.8, {
        scaleX: 0.1,
        scaleY: 0.1,
        rotationY: 0,
        autoAlpha: false
    },{
        scaleX: 1,
        scaleY: 1,
        autoAlpha: true
    }, "-=0.5")
    .to($(".overlay"), 0.8, {
        autoAlpha: true
    }, "-=1");

    eventTarget.animation = tl;

    eventTarget.animation.play();

    $(".popup").click(function(event) {

        eventTarget.animation.reverse();
        setTimeout( function(){
            $(eventTarget).css("z-index","4");
        }  ,2000 );
    });
})


    window.initModulesAnimation=function(){
        $(".popup").center();
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


        viewportWidth = $(window).width();
        viewportHeight = $(window).height();
    }

    window.columnAnimation=function( semester) {
        $(".popup").center();
        semesterModules = $('*[data-modulsem="' + semester + '"]');
        console.log(semesterModules);

        TweenMax.staggerFromTo(semesterModules, 1, {
            scaleX: 0.1,
            scaleY: 0.1,
            ease: Power3.easeOut,
            autoAlpha: 0
        }, {
            scaleX: 1,
            scaleY: 1,
            autoAlpha: 1
        }, 0.05)
    }

    jQuery.fn.center = function () {
        this.css("position","absolute");
        this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
            $(window).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
            $(window).scrollLeft()) + "px");
        return this;
    }

    window.initModulesAnimation();

});

loadModuleInfoIntoPopup = (moduleData) => {
    for (var key in moduleData) {
        $('.popup #module-' + key).html(moduleData[key]);
    }
};



