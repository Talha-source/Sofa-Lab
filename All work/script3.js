gsap.from("#navbar1 .logo,#navbar2 li",{
    opacity:0,
    y:-100,
    duration:1.5,
    stagger:0.4,
})
gsap.from("#center h1",{
    opacity:0,
    x:-100,
    duration:1.5,
    
})

gsap.from(".cen1",{
    x:100,
    duration:1.5,
    
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



gsap.from("#lefthand2",{
    opacity:0,
    duration:1.5,
    y:-100,
    scrollTrigger:"#lefthand2",
})


gsap.from("#righthand2",{
    opacity:0,
    duration:1.5,
    y:100,
    scrollTrigger:"#righthand2",
})



gsap.from("#lefthand3",{
    opacity:0,
    duration:1.5,
    x:-100,
    scrollTrigger:"#lefthand3",
})


gsap.from("#righthand3",{
    opacity:0,
    duration:1.5,
    x:100,
    scrollTrigger:"#righthand3",
})