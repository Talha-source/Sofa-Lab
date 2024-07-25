gsap.from("#nav1 .logo,#nav2 li",{
    opacity:0,
    y:-100,
    duration:1.5,
    stagger:0.4,
})
gsap.from("#center h1",{
    opacity:0,
    x:100,
    duration:1.5,
    
})
gsap.from(".cen2",{
    x:-100,
    duration:1.5,
    
})
gsap.from("#image1",{
    x:-200,
    duration:1.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#image1",
        scroller:"body",
        start:"top 70%",
        
    }
})

gsap.from("#image2",{
    y:-200,
    duration:1.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#image2",
        scroller:"body",
        start:"top 50%",
        
    }
})

gsap.from("#image3",{
    y:200,
    duration:1.5,
    opacity:0,
       scrollTrigger:{
        trigger:"#image3",
        scroller:"body",
        start:"top 90%",
        
    }
})

gsap.from("#image4",{
    x:400,
    duration:1.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#image4",
        scroller:"body",
        start:"top 70%",
        
    }
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
    