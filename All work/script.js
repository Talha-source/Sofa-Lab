// const scroll = new LocomotiveScroll({
    // el: document.querySelector('#main'),
    // smooth: true
// });


gsap.from("#navpart1 img,#navpart2 li",{
    opacity:0,
    y:-100,
    duration:1.5,
    stagger:0.4,
})
gsap.from("#center h1 span",{
    opacity:0,
    x:100,
    stagger:0.3,
})
gsap.from(".second ",{
duration:1.5,
opacity:0,
x:100,
})

gsap.from("#images #image1",{
    opacity:0,
    duration:1.5,
    x:-100,
    scrollTrigger:{
        trigger:"#images #image1",
        scroller:"body",
        start:"top 50%",
    }
})

gsap.from("#images #image2",{
    opacity:0,
    duration:1.5,
    y:-100,
    scrollTrigger:{
        trigger:"#images #image2",
        scroller:"body",
        start:"top 35%",
        
    }
 })

gsap.from("#images #image3",{
    opacity:0,
    duration:1.5,
    x:100,
    scrollTrigger:{
        trigger:"#images #image3",
        scroller:"body",
        start:"top 50%",   
    }
})

gsap.from("#images #image4",{
    opacity:0,
    duration:1.5,
    y:-100,
    scrollTrigger:{
        trigger:"#images #image4",
        scroller:"body",
        start:"top 74%",
    }
})

gsap.from("#images #image5",{
    opacity:0,
    duration:1.5,
    y:100,
    scrollTrigger:{
        trigger:"#images #image5",
        scroller:"body",
        start:"top 105%",
    }
})

gsap.from("#about",{
    opacity:0,
    duration:1.5,
    y:100,
    scrollTrigger:"#about",
})
gsap.from("#about h1,#about p,#about a",{
    opacity:0,
    y:100,
    duration:1.5,
    stagger:0.5,
    scrollTrigger:"#about",
})
gsap.from("#dist h1,#dist p,#dist a",{
    opacity:0,
    duration:1.5,
    y:100,
    stagger:0.5,
    scrollTrigger:"#dist",
})

gsap.from("#lefthand",{
    opacity:0,
    duration:1.5,
    x:-100,
    scrollTrigger:"#lefthand",
})


gsap.from("#righthand",{
    opacity:0,
    duration:1.5,
    x:100,
    scrollTrigger:"#righthand",
})
gsap.from("#lastnav li",{
opacity:0,
duration:1.5,
y:-100,
stagger:0.4,
scrollTrigger:"#lastnav",
})
gsap.from("#bug img",{
    opacity:0,
    duration:1.5,
    y:-100,
    scrollTrigger:"#bug",
    })
gsap.from("#bug p",{
    opacity:0,
    duration:1.5,
    y:100,
    scrollTrigger:"#bug p",
    })
gsap.from("#center",{
    y:100,
    opacity:0,
    duration:1.5,
})
gsap.from("#image2 #box2",{
 opacity:0,
 left:0,
})