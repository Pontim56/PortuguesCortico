// var flipTimeout;

// function flipCard(card) {
//   clearTimeout(flipTimeout); 
//   card.querySelector('.flip-card-inner').style.transform = 'rotateY(-180deg)';
// }

// function unflipCard(card) {
//   clearTimeout(flipTimeout); 
//   flipTimeout = setTimeout(function() {
//     card.querySelector('.flip-card-inner').style.transform = 'rotateY(0deg)';
//   }, 220);
// }


const myObserver = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=> {
    if (entry.isIntersecting){
      entry.target.classList.add('show')
    }else{
      entry.target.classList.remove('show')
    }
  })
})
const elements=document.querySelectorAll('.hidden')

elements.forEach((element)=>myObserver.observe(element))

