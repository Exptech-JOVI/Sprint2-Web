const botao = document.getElementById("btN4");
 
const popup = document.getElementById("popupLogin");
 
const usuarioInput = document.getElementById("usuarioInput");
const senhaInput = document.getElementById("senhaInput");
 
const entrar = document.getElementById("entrarLogin");
const cancelar = document.getElementById("cancelarLogin");

const cancelar2 = document.getElementById("cancelarLogin");
 
// notificação
const botaoPDF = document.getElementById("btN3");
const notificacao = document.getElementById("notificacaoPDF");
const notificacaoPasta = document.getElementById("notificacaoPasta");
 
botao.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.remove("disable");
});
 
 
cancelar.addEventListener("click", function(){
    popup.classList.add("disable");
 });

 
entrar.addEventListener("click", function(event){
    let usuario = usuarioInput.value;
    let senha = senhaInput.value;
 
    if(usuario === "admin" && senha === "123"){
        const pasta = localStorage.getItem("pastaCriada");

        if (!pasta) {
            localStorage.setItem("pastaCriada", "true");
            
            popup.classList.add("disable");
            
            notificacaoPasta.classList.remove("disable");

            setTimeout(function() {
                window.location.href = "/tela-galeria/telagaleria.html";
            }, 2000);
        } else {
            window.location.href = "/tela-galeria/telagaleria.html";
        }
    }else{
        alert("usuario ou senha incorretos!");
        //window.location.href = "telagerar.html";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    
    if (localStorage.getItem("pastaCriada") === "true") {
        botao.style.backgroundImage = "url('/icons/btnVisualizar.png')";
    }
});

// notificação
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

notificacaoPasta.addEventListener("click", function() {
    window.location.href = "/tela-galeria/telagaleria.html";
});