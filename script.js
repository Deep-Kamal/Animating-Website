var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
     crsr.style.left = dets.x+"px"
     crsr.style.top = dets.y+"px"
     blur.style.left = dets.x -200+"px"
     blur.style.top = dets.y-200+"px"
   
})




gsap.to("#nav",{
     backgroundColor :"#000",
     height:"95px",
     duration:0.6,
     scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markes:true,
        start:"top -10%",
        end:"top -11%",
        scrub:3
     }
    
})
gsap.to("#main",{
   
      backgroundColor:"#000",
      scrollTrigger:{
      trigger:"#main",
      scroller:"body",
      markes:true,
      start:"top -50%",
      end:"-100%",
      scrub:6
   }
})