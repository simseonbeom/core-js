
/* global gsap */

export function shake (t){

      
  const animation = gsap.to(t,{
    duration:0.1,
    x:-10,
    repeat:5,
    yoyo:true,
  })

  return animation
}


shake().restart();