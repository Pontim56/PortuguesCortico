

const myObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element)=>myObserver.observe(element))



// function mostrarMenu(){
//     var menu = document.getElementById("menu");
//     if (menu.style.display === "none") {
//         menu.style.display === "block";
//         document.getElementById("menu").innerText="oi";

//     } else {
//         menu.style.display ==="none";
//     }
// }
function mostrarMenu(event){
    var menu = document.getElementById("menu");
    var estilo = window.getComputedStyle(menu);
    var nav = document.getElementById("nav");
    if (estilo.display==="none") {
        menu.style.display="block";
        nav.style.backgroundColor="rgb(134, 197, 218)";
    }else{
        menu.style.display="none";
        nav.style.backgroundColor="rgb(207, 229, 236)";
    }
}