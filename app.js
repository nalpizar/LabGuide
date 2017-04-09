window.onload = function() {
    //texto en menos cantidad 
    //sol vivus

    var tl1 = new TimelineMax();
    var tl = new TimelineMax({delay:10});
    var tl2 = new TimelineMax({delay:20});

    function spin() {
        var spintl = new TimelineMax({repeat:-1});
        spintl.to('#wheel', 4, {transformOrigin:"50% 50%", rotation:360, ease: Power0.easeNone})
    }

    function waves() {
        var wavetl = new TimelineMax({repeat:-1});
        wavetl.to('.ocean-1', 4, { x:-60, ease: Power0.easeNone})
        wavetl.to('.ocean-1', 4, { x:60, ease: Power0.easeNone})
    }

    function sun() {
        var suntl = new TimelineMax({repeat:-1});
        suntl.to('#sun', 4, {transformOrigin:"50% 50%", rotation:360, ease: Power0.easeNone})
    }

    tl1.to('#pin', 2 / 4, {y:-500, ease:Power2.easeOut});
    tl1.to('#pin', 2 / 2, {y:0, ease:Bounce.easeOut, delay:2 / 4})
    tl1.fromTo('#bubble-3', 1.5, {scale:0, transformOrigin:"0 100%"}, {scale:3, ease:Bounce.easeOut})
    tl1.fromTo('.translado-title3', 0.5, {opacity:0}, {opacity:1, ease:Power1.easeOut})
    tl1.fromTo('.translado-parag3', 0.5, {opacity:0}, {opacity:1, ease:Power1.easeOut})
    tl.fromTo('#translado', 1, {opacity:0}, {opacity:1, ease:Power1.easeInOut});
    tl.add(spin)
    tl.fromTo('#bubble', 1.5, {scale:0, transformOrigin:"0 100%"}, {scale:4, ease:Bounce.easeOut})
    tl.fromTo('.translado-title', 0.5, {opacity:0}, {opacity:1, ease:Power1.easeOut})
    tl.fromTo('.translado-parag', 0.5, {opacity:0}, {opacity:1, ease:Power1.easeOut})
	tl2.fromTo('div .ocean', 1, { y:0}, {y:-60, display:'block'})
    tl2.add(waves)
    tl2.add(sun)
    tl2.fromTo('#conde', 1, {opacity:0}, {opacity:1, ease:Power1.easeInOut});
    tl2.fromTo('#bubble-2', 1.5, {scale:0, transformOrigin:"0 100%"}, {scale:4, ease:Bounce.easeOut})
    tl2.fromTo('.translado-title2', 0.5, {opacity:0}, {opacity:1, ease:Power1.easeOut})
    tl2.fromTo('.translado-parag2', 0.5, {opacity:0}, {opacity:1, ease:Power1.easeOut})

    var bezierTween;

    bezierTween = new TweenMax("#fish1", 3, {
        bezier:{
          type:"soft", 
          values:[{x:400, y:-250}, {x:560, y:250}],
          autoRotate:true
        },
        repeatDelay:4,
        delay:2,
      ease:Linear.easeNone, repeat:-1});    
};