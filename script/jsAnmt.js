

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
    var imgM = document.getElementById("imgM");
    var imgC = document.getElementById("imgC");
    if (estilo.display==="none") {
        menu.style.display="block";
        nav.style.backgroundColor="rgb(134, 197, 218)";
        content2.style.display="none";
        imgC.style.display="block"
        imgM.style.display="none"
    }else{
        imgM.style.display="block"
        imgC.style.display="none"
        menu.style.display="none";
        nav.style.backgroundColor="rgb(207, 229, 236)";
        content2.style.display="block";
    }
}

function fecharMenu() {
    var imgM = document.getElementById("imgM");
    var imgC = document.getElementById("imgC");
    var nav = document.getElementById("nav");
    var content2 = document.getElementById("content2");
    var menu = document.getElementById("menu");
    imgM.style.display="block"
    imgC.style.display="none"
    menu.style.display = "none";
    nav.style.backgroundColor="rgb(207, 229, 236)";
    content2.style.display="block";
}



var linksDoMenu = document.querySelectorAll('.menu a');

linksDoMenu.forEach(function (link) {
    link.addEventListener('click', function () {
        fecharMenu();
    });
});