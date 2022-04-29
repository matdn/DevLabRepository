let about = document.querySelector('#about') 
let btnFlip = document.querySelector('.btn__flip')
let btnFlip1 = document.querySelector('.btn__flip1')
let btnFlip2 = document.querySelector('.btn__flip2')
let btnFlip3 = document.querySelector('.btn__flip3')
let btnFlip4 = document.querySelector('.btn__flip4')
let btnFlip5 = document.querySelector('.btn__flip5')
let btnFlip6 = document.querySelector('.btn__flip6')
let btnFlip7 = document.querySelector('.btn__flip7')
let btnFlip8 = document.querySelector('.btn__flip8')
about.addEventListener('mouseover', function(){
  console.log('hello')
  btnFlip1.style.transform = 'rotateX(-90deg)'
  btnFlip2.style.transform = 'rotateX(-90deg)'
  btnFlip3.style.transform = 'rotateX(-90deg)'
  btnFlip4.style.transform = 'rotateX(-90deg)'
  btnFlip5.style.transform = 'rotateX(-90deg)'
  btnFlip6.style.transform = 'rotateX(-90deg)'
  btnFlip7.style.transform = 'rotateX(-90deg)'
  btnFlip8.style.transform = 'rotateX(-90deg)'
})
about.addEventListener('mouseout', function(){
  console.log('hello')
  btnFlip1.style.transform = 'rotateX(0deg)'
  btnFlip2.style.transform = 'rotateX(0deg)'
  btnFlip3.style.transform = 'rotateX(0deg)'
  btnFlip4.style.transform = 'rotateX(0deg)'
  btnFlip5.style.transform = 'rotateX(0deg)'
  btnFlip6.style.transform = 'rotateX(0deg)'
  btnFlip7.style.transform = 'rotateX(0deg)'
  btnFlip8.style.transform = 'rotateX(0deg)'
})

function parallax(element) {
    let windowScroll = window.pageYOffset;
  
    let elements = document.getElementsByClassName('parallax');
  
      for (let i = 0; i < elements.length; i++) {
      let speed = elements[i].getAttribute('speed');
      
      if (inView(elements[i].parentElement)) {
        elements[i].style.transform 
        = `translate3d(0px,${-windowScroll/10*speed}px, 0px)`;
      }
    }
    
    console.log('scrolling');
  }
  
  window.addEventListener('scroll',  parallax, {passive: true});
  
  
  
  const windowH = window.innerHeight;
  function inView(elements) {
  
      let elementPositionTop = elements.getBoundingClientRect().top - windowH;
      let elementPositionBottom = elements.getBoundingClientRect().bottom;
  
      if (elementPositionTop < 0 && elementPositionBottom > 0) {
          return true; 
      } else {
          return false;
      }
  
  }

gsap.registerPlugin(ScrollTrigger);
  gsap.to(".imga",{
    scrollTrigger: {
        trigger: ".imga",
        start: "top bottom",
        end: "bottom top",
        scrub:1,
        toggleActions: "restart none none none"
    },
    scale: 16,
    rotate:360,
    duration:3
  })
  gsap.to(".imgb",{
    scrollTrigger: {
        trigger: ".imga",
        start: "top bottom",
        end: "bottom top",
        scrub:1,
        toggleActions: "restart none none none"
    },
    scale: 24,
    rotate:-360,
    duration:3
  })
  gsap.to(".strong2",{
    scrollTrigger: {
      trigger: ".title1",
      start: "top center",
      scrub: 1,
    },
    y: 70
  })
  gsap.to(".strong3",{
    scrollTrigger: {
      trigger: ".title1",
      start: "top center",
      scrub: 1,
    },
    y: 140
  })
  gsap.to(".strong4",{
    scrollTrigger: {
      trigger: ".title1",
      start: "top center",
      scrub: 1,
    },
    y: 210
  })
  gsap.to(".strong5",{
    scrollTrigger: {
      trigger: ".title1",
      start: "top center",
      scrub: 1,
    },
    y: 280
  })
  gsap.to(".strong6",{
    scrollTrigger: {
      trigger: ".title1",
      start: "top center",
      scrub: 1,
    },
    y: 350
  })

let sections = gsap.utils.toArray(".panel");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".threeD",
      pin: true,
      scrub: 1,
    }
  });
  
  

