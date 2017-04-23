window.onload = function() {
  landing();
};

function landing() {
    var tl = new TimelineMax({repeat:-1});
    var tl2 = new TimelineMax({repeat:-1});
    var tl3 = new TimelineMax({repeat:-1});

    function lengua() {
        var lenguatl = new TimelineMax({repeat:-1});
        lenguatl.to('.lengua', 0.3, {y:0, ease:Power2.easeOut});
        lenguatl.to('.lengua', 0.3, {y:4, ease:Power2.easeOut})
    }

    tl.add(lengua)
    tl.fromTo('.hidden-eyes', 0.4, {opacity:0}, {opacity:1, ease:Power1.easeInOut,delay:3})
    tl2.fromTo('.hidden-eyes-2', 0.2, {opacity:0}, {opacity:1, ease:Power1.easeInOut,delay:2});
    tl3.fromTo('.hidden-eyes-3', 0.2, {opacity:0}, {opacity:1, ease:Power1.easeInOut,delay:4});
}

function goToOrigen() {
    var tl = new TimelineMax();
    var pin = document.getElementById("pin");

    tl.to('#pin', 2 / 4, {display: "block", y:0, ease:Power2.easeOut});
    tl.to('#pin', 2 / 2, {y:380, ease:Bounce.easeOut, delay:2 / 4})
    tl.fromTo('#bubble-3', 1.5, {scale:0, transformOrigin:"-32% 100% 0px"}, {scale:3, ease:Bounce.easeOut})
    tl.fromTo('.translado-title3', 0.5, {opacity:0}, {opacity:1, ease:Power1.easeOut})
    tl.fromTo('.translado-parag3', 0.5, {opacity:0}, {opacity:1, ease:Power1.easeOut}) 

       

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

    $(transladoArrow).hover(
       function(){ $(this).removeClass('animated') }
    )

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
          values:[{x:400, y:-250}, {x:560, y:120}],
          autoRotate:true
        },
        repeatDelay:4,
        delay:2,
      ease:Linear.easeNone, repeat:-1}
    );    
}

function Adopcion() {
    var tl = new TimelineMax();

    function hearts() {
        var hearttl = new TimelineMax({repeat:-1});

        hearttl.fromTo('.hearts', 1, {x:0,scale:1}, {scale:0.5, ease:Power1.easeOut})
        hearttl.fromTo('.hearts', 1, {x:0,scale:0.5}, {scale:1, ease:Power1.easeOut});
    }

    
    tl.add(hearts)
    tl.fromTo('#adopcion-bubble', 1.5, {scale:0, transformOrigin:"100% 100% 50%"}, {scale:4, ease:Bounce.easeOut})
    tl.fromTo('.adopcion-parag', 0.5, {opacity:0}, {opacity:1, ease:Power1.easeOut});

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
        nav.addClass( "singleNav" );
    } else {
        nav.removeClass( "singleNav" )
    }

    var origenArrow = document.getElementById("origen-arrow");

    $(origenArrow).hover(
       function(){ $(this).removeClass('animated') }
    )

    setTimeout(function(){ 
        origenArrow.classList.add("animated");
    }, 5000);
});

var scrollOrigen2 = true;

$.event.add(window, "scroll", function() {
    var hoverTop = $('#adopcion').offset().top,
        hoverHeight = $('#adopcion').outerHeight(),
        windowHeight = $(window).height(),
        windowScrollTop = $(this).scrollTop();
        
        if (windowScrollTop + 100 > (hoverTop + hoverHeight - windowHeight)) {
            if(scrollOrigen2) {
                Adopcion(); 
                scrollOrigen2 = false;
            } 
        } 
});

function Cuidados() {
    $("#box").addClass( "animated" );
    
    var tl6 = new TimelineMax({repeat:-1});

     function lenguaComplete() {
        var lengua1tl = new TimelineMax({repeat:-1});

        lengua1tl.to('#lenguaComplete', 0.3, {y:0, ease:Power2.easeOut});
        lengua1tl.to('#lenguaComplete', 0.3, {y:4, ease:Power2.easeOut})
    }  

    tl6.add(lenguaComplete)
    tl6.fromTo('#hidden-eyes-black', 0.4, {opacity:0}, {opacity:1, ease:Power1.easeInOut,delay:3});

    Cuidado1();
}

function Cuidado1() {
    var tl = new TimelineMax();

    function lima() {
        var limatl = new TimelineMax({repeat:-1});

        limatl.fromTo('#hand', 0.8, {x: 0}, {x: 160, ease: Power0.easeNone})
        limatl.fromTo('#hand', 0.8, {x: 160}, {x: 0, ease: Power0.easeNone});
    }  
    tl.add(lima); 
}

function Cuidado2() {

    var tl = new TimelineMax();

    function brush() {
        var brushtl = new TimelineMax({repeat:-1});

        brushtl.fromTo('#brush', 0.5, {x:0, y:0}, {x:60, y:40})
        brushtl.fromTo('#brush', 0.5, {x:60, y:40}, {x:60, y:140})
        brushtl.fromTo('#brush', 0.5, {x:60, y:140}, {x:0, y:0});
    }

    tl.to('#hand', 0.5, {opacity: 0, display: "none"})
    tl.to('.nails-text', 0.5, {opacity: 0, display:"none"})
    tl.to('.hair-text', 0.5, {opacity: 1, display:"block"})
    tl.to('#brush', 0.5, {opacity: 1, display:"block"})
    tl.add(brush)
    tl.to('#cuidado2', 0.5, {opacity: 0, display:"none"})
    tl.to('#cuidado3', 0.5, {opacity: 1, display:"block"});
}

function Cuidado3() {

    var tl = new TimelineMax();

    function wipe() {
      var tl = new TimelineMax({repeat:-1});

      tl.fromTo('#wipe', 0.5, {y: 0, x:0}, {y:5, x:5})
      tl.fromTo('#wipe', 0.5, {y: 5, x:5}, {y:0, x: 0});
    } 

    tl.to('#brush', 0.5, {opacity: 0, display:"none"})
    tl.to('.hair-text', 0.5, {opacity: 0, display:"none"})
    tl.to('.ear-text', 0.5, {opacity: 1, display:"block"})
    tl.to('#oreja', 0.5, {opacity: 0, display:"none"})
    tl.to('#flip-ear', 0.5, {opacity: 1, display:"block"})
    tl.to('#wipe', 0.5, {opacity: 1, display:"block"})
    tl.add(wipe)
    tl.to('#cuidado3', 0.5, {opacity: 0, display:"none"})
    tl.to('#cuidado4', 0.5, {opacity: 1, display:"block"});
   
}

function Cuidado4() {

    var tl = new TimelineMax(); 

    function espuma() {
      var tl = new TimelineMax({repeat:-1});

      tl.fromTo('#espuma', 1, {scale:0, opacity:0}, {scale:0.2, opacity:0.2})
      tl.fromTo('#espuma', 1, {scale:0.2, opacity:0.2}, {scale:0.5, opacity:0.5})
      tl.fromTo('#espuma', 1, {x:0, scale:0.5, opacity:0.5}, {x:20, scale:0.8, opacity:0.8})
      tl.fromTo('#espuma', 1, {scale:0.8, opacity:0.8}, {scale:1, opacity:1});
    } 

    function cepillo() {
      var tl = new TimelineMax({repeat:-1});

      tl.fromTo('#tooth-brush', 0.5, {x:0}, {x:20});
      tl.fromTo('#tooth-brush', 0.5, {x:20}, {x:0});
    } 

    tl.to('#wipe', 0.5, {opacity: 0, display:"none"})
    tl.to('.ear-text', 0.5, {opacity: 0, display:"none"})
    tl.to('.teeth-text', 0.5, {opacity: 1, display:"block"})
    tl.to('#flip-ear', 0.5, {opacity: 1, display:"none"})
    tl.to('#oreja', 0.5, {opacity: 1, display:"block"})
    // tl.to('#espuma', 0.5, {opacity: 1, display:"block"})
    tl.to('#tooth-brush', 0.5, {opacity: 1, display:"block"})
    tl.add(cepillo)
    tl.add(espuma);
}

var scrollCuidados = true;

$.event.add(window, "scroll", function() {
    var hoverTop = $('#cuidados').offset().top,
        hoverHeight = $('#cuidados').outerHeight(),
        windowHeight = $(window).height(),
        windowScrollTop = $(this).scrollTop();
        
        if (windowScrollTop + 100 > (hoverTop + hoverHeight - windowHeight)) {
            if(scrollCuidados) {
                Cuidados();
                scrollCuidados = false;
            } 
        } 
});

function Padecimientos() {
    var tl = new TimelineMax();

    function head() {
        var headtl = new TimelineMax({repeat:-1});

        headtl.fromTo('#head', 1, {y:0, x:0}, {y:3, x:3, ease:Power2.easeOut});
        headtl.fromTo('#head', 1, {y:3, x:3}, {y:0, x:0, ease:Power2.easeOut});
    }  

    tl.add(head)
    tl.fromTo('#num-1', 1, {scale:0}, {scale:50, ease:Bounce.easeOut})
    tl.fromTo('#text-for-numbers-1', 1, {opacity:0}, {opacity:1, ease:Power1.easeOut})
    tl.fromTo('#num-2', 1, {scale:0}, {scale:50, ease:Bounce.easeOut, delay:2})
    tl.fromTo('#text-for-numbers-2', 1, {opacity:0}, {opacity:1, ease:Power1.easeOut})
     tl.fromTo('#num-3', 1, {scale:0}, {scale:50, ease:Bounce.easeOut, delay:2})
    tl.fromTo('#text-for-numbers-3', 1, {opacity:0}, {opacity:1, ease:Power1.easeOut});

}

var scrollPadecimientos = true;

$.event.add(window, "scroll", function() {
    var hoverTop = $('#padecimientos').offset().top,
        hoverHeight = $('#padecimientos').outerHeight(),
        windowHeight = $(window).height(),
        windowScrollTop = $(this).scrollTop();
        
        if (windowScrollTop + 100 > (hoverTop + hoverHeight - windowHeight)) {
            if(scrollPadecimientos) {
                Padecimientos();
                scrollPadecimientos = false;
            } 
        } 
});

// Ball

function Juegos() {
  // setup 1st master timeline
  var bounceTL = new TimelineMax({
    paused: true,
    repeat: -1
  });

  ////////////////////////////////////////////
  /* ball bounce up and down child timeline */
  function ballBounce() {

    var tl = new TimelineMax();

    tl

    /* ball bounce up */
      .to("#mc_ball", 0.5, {
      transformOrigin: "50% 50%",
      y: 90,
      ease: Circ.easeOut
      //ease: Power1.easeInOut
    }, "bounce")

    /* ball bounce down */
    .to("#mc_ball", 0.4, {
      transformOrigin: "50% 50%",
      y: 279,
      ease: Circ.easeIn
        //ease: Power1.easeInOut
    }, "bounce2")

    /* ball squash */
    .to("#mc_ball", 0.15, {
      transformOrigin: "50% 100%",
      scaleX: 1.5,
      scaleY: 0.6,
      ease: Power1.easeInOut
      //ease: Bounce.easeOut
    }, "bounce3-=0.04")

    /* ball rotateZ around */
    .to("#mc_ball_base", 1, {
      force3D: true,
      rotation: "+=360",
      ease: Power0.easeNone
    }, "bounce")

    return tl;
  }

  ////////////////////////////////////////
  /* ball shadow stretch child timeline */
  function ballShadow() {

    var tl = new TimelineMax();

    tl

    /* ball shadow stretch */
      .to("#mc_shadow", 0.5, {
        transformOrigin: "50% 50%",
        autoAlpha: 0.15,
        scaleX: 1.7,
        scaleY: 1.2,
        ease: Power1.easeInOut
      }) //, "bounce"

    /* ball shadow normal */
    .to("#mc_shadow", 0.5, {
        transformOrigin: "50% 50%",
        autoAlpha: 1,
        scaleX: 1,
        scaleY: 1,
        ease: Power1.easeInOut
      }) //, "bounce2"

    return tl;
  }

  window.requestAnimationFrame(function() {

    //////////////
    /* masterTL */

    bounceTL
      .add(ballBounce(), "ball")
      .add(ballShadow(), "ball")

      .progress(1).progress(0)
      //.timeScale(0.9)
      .play();

  });
};

function otherToys() {
  var tl = new TimelineMax();

  function spinFrisbee() {
    var spinFrisbeetl = new TimelineMax({repeat:-1});
    spinFrisbeetl.to('#frisbee', 0.8, {transformOrigin:"50% 50%", rotation:360, ease: Power0.easeNone})
  }

  tl.fromTo('#text-1', 1.5, {scale:0}, {scale:1, ease:Bounce.easeOut})
  tl.fromTo('#text-2', 1.5, {scale:0}, {scale:1, ease:Bounce.easeOut, delay:1})
  tl.fromTo('#bone', 1.5, {scale:0}, {scale:1, ease:Bounce.easeOut})
  tl.fromTo('#text-3', 1.5, {scale:0}, {scale:1, ease:Bounce.easeOut, delay:1})
  tl.fromTo('#frisbee', 1.5, {scale:0}, {scale:1, ease:Bounce.easeOut})
  tl.fromTo('#frisbee', 1, {x:0, y:0}, {x:80, y:-80, ease:Power1.easeInOut})
  tl.add(spinFrisbee);
}  

var scrollJuegos = true;

$.event.add(window, "scroll", function() {
  var hoverTop = $('#juegos').offset().top,
      hoverHeight = $('#juegos').outerHeight(),
      windowHeight = $(window).height(),
      windowScrollTop = $(this).scrollTop();
      
      if (windowScrollTop + 100 > (hoverTop + hoverHeight - windowHeight)) {
          if(scrollJuegos) {

              TweenLite.set("#mc_shadow", {
                transformOrigin: "50% 50%",
                x: 600,
                y: 605
              });

              TweenLite.set("#mc_ball", {
                transformOrigin: "50% 50%",
                x: 300,
                y: 279
              });

              TweenLite.set("#mc_ball_base", {
                transformOrigin: "50% 50%"
              });

              Juegos();
              otherToys();
              scrollJuegos = false;
          } 
      } 
});