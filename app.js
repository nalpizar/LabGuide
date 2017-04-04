window.onload = function() {

    var tl1 = new TimelineMax();
    var tl = new TimelineMax({delay:10});
    var tl2 = new TimelineMax({delay:20});

    function spin() {
        var spintl = new TimelineMax({repeat:-1});
        spintl.to('#wheel', 4, {transformOrigin:"50% 50%", rotation:360, ease: Power0.easeNone})
    }

    function waves() {
        var wavetl = new TimelineMax({repeat:-1});
        // wavetl.to('.ocean', 1, { y:-60, ease:Power1.easeInOut})
        wavetl.to('.ocean-1', 1, { x:-60, ease:Power1.easeInOut})
    }

    function sun() {
        var suntl = new TimelineMax({repeat:-1});
        // wavetl.to('.ocean', 1, { y:-60, ease:Power1.easeInOut})
        suntl.to('#sun', 4, {transformOrigin:"50% 50%", rotation:360, ease: Power0.easeNone})
        // tl.fromTo('#bubble', 1.5, {scale:0, transformOrigin:"0 100%"}, {scale:4, ease:Bounce.easeOut})
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
	tl2.fromTo('.ocean', 1, { y:0}, {y:-60, display:'block'})
    tl2.add(waves)
    tl2.add(sun)
    tl2.fromTo('#conde', 1, {opacity:0}, {opacity:1, ease:Power1.easeInOut});
    tl2.fromTo('#bubble-2', 1.5, {scale:0, transformOrigin:"0 100%"}, {scale:4, ease:Bounce.easeOut})
    tl2.fromTo('.translado-title2', 0.5, {opacity:0}, {opacity:1, ease:Power1.easeOut})
    tl2.fromTo('.translado-parag2', 0.5, {opacity:0}, {opacity:1, ease:Power1.easeOut})


   

    
    // tl.fromTo('#sun-1', 1.5, {scale:0, transformOrigin:"0 100%"}, {scale:4, ease:Bounce.easeOut})
    // tl2.fromTo('#boat', 0.5, {opacity:0}, {opacity:1, ease:Power1.easeOut})

     


    var bezierTween;


    bezierTween = new TweenMax("#creature", 2, {
        bezier:{
          type:"soft", 
          values:[{x:600, y:-200}, {x:620, y:200}],
          autoRotate:true
        },
        repeatDelay:4,
        delay:2,
      ease:Linear.easeNone, repeat:-1});



    
};