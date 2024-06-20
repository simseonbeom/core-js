


const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');

const h = t => t.style.height = 0;

// depthList.forEach((item)=>{
//   console.log( item );
// })

// depthList.forEach(console.log)
// depthList.forEach(h)


aList.forEach((a)=>{
  a.addEventListener('mouseenter',()=>{

    const target = a.lastElementChild;

    depthList.forEach(h)

    target.style.height = '100px';
  })
})


header.addEventListener('mouseleave', () => depthList.forEach(h))
















