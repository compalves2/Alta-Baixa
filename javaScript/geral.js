var offsetStart = 0;
var offsetEnd = 0;

var artigo_typeEm = document.getElementById("artigo_typeEm");

window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll', ( window.pageYOffset - offsetStart ) / ( document.body.offsetHeight - offsetStart - offsetEnd - window.innerHeight ));
}, false);

document.getElementById("goTopTypem").addEventListener("click", function (){
    artigo_typeEm.scrollTop = 0;
});