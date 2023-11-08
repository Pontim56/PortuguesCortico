

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




function mostrarMenu(event){
    var menu = document.getElementById("menu");
    var estilo = window.getComputedStyle(menu);
    var nav = document.getElementById("nav");
    var content2 = document.getElementById("content2");
    if (estilo.display==="none") {
        menu.style.display="block";
        nav.style.backgroundColor="rgb(134, 197, 218)";
        content2.style.display="none";
    }else{
        menu.style.display="none";
        nav.style.backgroundColor="rgb(207, 229, 236)";
        content2.style.display="block";
    }
}
