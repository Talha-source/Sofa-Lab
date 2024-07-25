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
gsap.from("#mid img",{
 y:100,
 duration:2,
 opacity:0,
 scrollTrigger:"#mid img",
})
gsap.from("#para h1",{
    duration:2,
    opacity:0,
    y:-100,
    scrollTrigger:"#para h1",
})

gsap.from("#para p",{
    duration:2,
    opacity:0,
    y:-200,
    scrollTrigger:"#para p",
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