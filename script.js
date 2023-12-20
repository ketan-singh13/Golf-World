/* Here dets is the position of the mouse cursor  */
var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x-40+"px"
    blur.style.top=dets.y-40+"px"
})
var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border="1px solid #fff"
        crsr.style.backgroundColor= "transparent"
               
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border="0px solid #95C11E"
        crsr.style.backgroundColor="#95C11E"
    })
})




gsap.to("#nav",{
    backgroundColor:"#000",
    duration:1,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%", 
        end:"top -11%%",
        scrub:0.7,

    }
}) 
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{ 
        trigger:"#main",
    scroller:"body",
    start:"top -25%",
    end:"top -70%", 
    scrub:2,
    }
})

gsap.from("#about-us img,#about-text",{
    y:90,
    opacity:0,
    duration:1,
    stragger:0.4,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:2,
    }



})
gsap.from(".card",{
    scale:0.9,
    opacity:0,
    duration:0.5,
    stragger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1,
    }
})
gsap.from("#left-colon ",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#left-colon",
        scroller:"body",
        start:"top 50%",
        end:"47%",
        scrub:1,
    }
})
gsap.from("#right-colon ",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#left-colon",
        scroller:"body",
        start:"top 50%",
        end:"47%",
        scrub:1,
    }
})
gsap.from("#backtext",{
    
 y:50,
 scrollTrigger: {
 trigger:"#backtext",
 scroller:"body",
 start: "top 75%",
 end: "top 70%",
 scrub:4    
 }  
 })