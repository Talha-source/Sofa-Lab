gsap.from("#navbar1 .logo,#navbar2 li",{
    opacity:0,
    y:-100,
    duration:1.5,
    stagger:0.4,
})
gsap.from("#center h1",{
    opacity:0,
    y:100,
    duration:1.5,
    
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
