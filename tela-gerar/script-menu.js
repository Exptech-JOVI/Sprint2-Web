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
 
window.location.href = "/tela-galeria/telagaleria.html";
 
}else{
 
alert("usuario ou senha incorretos!");
//window.location.href = "telagerar.html";
}
 
});
 