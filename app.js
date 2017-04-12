function goToOrigen() {
    var tl = new TimelineMax();
    var origenArrow = document.getElementById("origen-arrow");
    var pin = document.getElementById("pin");

    tl.to('#pin', 2 / 4, {display: "block", y:0, ease:Power2.easeOut});
    tl.to('#pin', 2 / 2, {y:380, ease:Bounce.easeOut, delay:2 / 4})
    tl.fromTo('#bubble-3', 1.5, {scale:0, transformOrigin:"-32% 100% 0px"}, {scale:3, ease:Bounce.easeOut})
    tl.fromTo('.translado-title3', 0.5, {opacity:0}, {opacity:1, ease:Power1.easeOut})
    tl.fromTo('.translado-parag3', 0.5, {opacity:0}, {opacity:1, ease:Power1.easeOut}) 

    setTimeout(function(){ 
        origenArrow.classList.add("animated");
    }, 5000);   

    var condeSection = document.getElementById("conde");
    var transladoSection = document.getElementById("translado");

    // pin.style.display = "block";
    condeSection.style.display = "none";
    transladoSection.style.display = "none";
}

function goToTranslado() {
    var transladoSection = document.getElementById("translado");
    var tl = new TimelineMax();
    var transladoArrow = document.getElementById("translado-arrow");

    transladoSection.style.display = "block";

    function spin() {
        var spintl = new TimelineMax({repeat:-1});
        spintl.to('#wheel', 4, {transformOrigin:"50% 50%", rotation:360, ease: Power0.easeNone})
    }

    tl.fromTo('#translado', 1, {opacity:0}, {opacity:1, ease:Power1.easeInOut});
    tl.add(spin)
    tl.fromTo('#bubble', 1.5, {scale:0, transformOrigin:"0 100%"}, {scale:4, ease:Bounce.easeOut})
    tl.fromTo('.translado-title', 0.5, {opacity:0}, {opacity:1, ease:Power1.easeOut})
    tl.fromTo('.translado-parag', 0.5, {opacity:0}, {opacity:1, ease:Power1.easeOut})

    setTimeout(function(){ 
        transladoArrow.classList.add("animated");
    }, 5000);
}

function goToConde() {
    var bezierTween;
    var tl = new TimelineMax();
    var condeSection = document.getElementById("conde");

    condeSection.style.display = "block";

    function waves() {
        var wavetl = new TimelineMax({repeat:-1});
        wavetl.to('.ocean-1', 4, { x:-60, ease: Power0.easeNone})
        wavetl.to('.ocean-1', 4, { x:60, ease: Power0.easeNone})
    }

    function sun() {
        var suntl = new TimelineMax({repeat:-1});
        suntl.to('#sun', 4, {transformOrigin:"50% 50%", rotation:360, ease: Power0.easeNone})
    }

    tl.fromTo('div .ocean', 1, { y:0}, {y:-60, display:'block'})
    tl.add(waves)
    tl.add(sun)
    tl.fromTo('#conde', 1, {opacity:0}, {opacity:1, ease:Power1.easeInOut});
    tl.fromTo('#bubble-2', 1.5, {scale:0, transformOrigin:"0 100%"}, {scale:4, ease:Bounce.easeOut})
    tl.fromTo('.translado-title2', 0.5, {opacity:0}, {opacity:1, ease:Power1.easeOut})
    tl.fromTo('.translado-parag2', 0.5, {opacity:0}, {opacity:1, ease:Power1.easeOut})

    bezierTween = new TweenMax("#fish1", 3, {
        bezier:{
          type:"soft", 
          values:[{x:400, y:-250}, {x:560, y:250}],
          autoRotate:true
        },
        repeatDelay:4,
        delay:2,
      ease:Linear.easeNone, repeat:-1}
    );    
}

var scrollOrigen = true;

$.event.add(window, "scroll", function() {
    var hoverTop = $('#origen').offset().top,
        hoverHeight = $('#origen').outerHeight(),
        windowHeight = $(window).height(),
        windowScrollTop = $(this).scrollTop();

        if (windowScrollTop + 100 > (hoverTop + hoverHeight - windowHeight)) {
            if(scrollOrigen) {
                goToOrigen(); 
                scrollOrigen = false;
            } 
        }

    var top = window.pageYOffset || document.documentElement.scrollTop;
    var nav = $("#navigation");    
     

    if (top >= 79) {
        nav.addClass( "yourClass" );
    } else {
        nav.removeClass( "yourClass" )
    }

    console.log(top);   
});