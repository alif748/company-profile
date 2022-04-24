let floating = document.querySelectorAll('.floating')
floating.forEach(x => {
  const floatAnimation = () => {
    const tlCan = new TimelineMax({repeat:-1});
    tlCan
      .to(x, 3, { y:'-=30', x:'+=20',  rotation:'-=5', ease:Power1.easeInOut})
      .to(x, 2, { y:'+=30', x:'-=20', rotation:'-=5', ease:Power1.easeInOut})
      .to(x, 3, { y:'-=20',  rotation:'+=5', ease:Power1.easeInOut})
      .to(x, 3, { y:'+=20',  rotation:'+=5', ease:Power1.easeInOut})
      .to(x, 3, { y:'-=50', ease:Power1.easeInOut})
      .to(x, 3, { y:'+=50', ease:Power1.easeInOut})
      .to(x, 3, { y:'-=30', ease:Power1.easeInOut})
      .to(x, 3, { y:'+=30', ease:Power1.easeInOut})
      .to(x, 2, { y:'-=30', ease:Power1.easeInOut})
      .to(x, 2, { y:'+=30', ease:Power1.easeInOut})
      TweenLite.to(tlCan, 27, {ease:Power1.easeInOut})

  }

  floatAnimation();
})



function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
      y = direction * 200;
  // if(elem.classList.contains("gs_reveal_fromLeft")) {
  //   x = -100;
  //   y = 0;
  // } else if (elem.classList.contains("gs_reveal_fromRight")) {
  //   x = 100;
  //   y = 0;
  // }
  console.log(elem);
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.25,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo",
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      start:"-200 center",
      trigger: elem,
      onEnter: function() { animateFrom(elem) },
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});
