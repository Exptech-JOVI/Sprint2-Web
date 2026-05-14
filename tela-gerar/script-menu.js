const botao = document.getElementById("btN4");
 
const popup = document.getElementById("popupLogin");
 
const usuarioInput = document.getElementById("usuarioInput");
const senhaInput = document.getElementById("senhaInput");
 
const entrar = document.getElementById("entrarLogin");
const cancelar = document.getElementById("cancelarLogin");

const cancelar2 = document.getElementById("cancelarLogin");
 
 
botao.addEventListener("click", function(event){
 
event.preventDefault();
 
popup.classList.remove("disable");
 
});
 
 
cancelar.addEventListener("click", function(){
 
popup.classList.add("disable");
 
});

 
entrar.addEventListener("click", function(){
 
let usuario = usuarioInput.value;
let senha = senhaInput.value;
 
if(usuario === "admin" && senha === "123"){
localStorage.setItem("pastaCriada", "true")
window.location.href = "/tela-galeria/telagaleria.html";
 
}else{
 
alert("usuario ou senha incorretos!");
//window.location.href = "telagerar.html";
}
 
});
 
/*
document.addEventListener("DOMContentLoaded", function() {
    //const botao = document.getElementById("btN4");
    
    if (localStorage.getItem("pastaCriada") === "true") {
        botao.style.backgroundImage = "url('/icons/btn4Visualizar.png')";
        // tamanho
        botao.style.backgroundSize = "78px"; 
    }
});
*/

// notificação
const botaoPDF = document.getElementById("btN3");
const notificacao = document.getElementById("notificacaoPDF");

botaoPDF.addEventListener("click", function(event) {
    event.preventDefault(); 

    notificacao.classList.remove("disable");

    setTimeout(function() {
        notificacao.classList.add("disable");
    }, 5000);
});

notificacao.addEventListener("click", function() {
    window.location.href = "/tela-pdf/telapdf.html";
});