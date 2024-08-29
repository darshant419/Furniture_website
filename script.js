var tl = gsap.timeline({scrollTrigger:{
    trigger: '#section1',
    start: '12% 20%',
    end: '40% 80%',
    markers: true,
    scrub:1,
    pin:true,
}})

tl.to(".top_content",{
    rotateX:"110deg",
    opacity: 0,
    duration:3,
   

},"rc")

tl.to(".inner_btm_head",{
    rotateX:"-110deg",
    opacity: 0,
    duration:3,
   

},"rc")

tl.to(".para",{
    opacity: 0,dealy:2,
},"rc")

tl.to(".vid-tag",{
  
width:"100%",



  
},"rc")