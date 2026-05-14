const botao = document.getElementById("aleatorio2");

const popupPasta = document.getElementById("popupPasta");

const cancelarPasta = document.getElementById("cancelarPasta");

const salvarPasta = document.getElementById("salvarPasta");

const novoNomeInput = document.getElementById("novoNomeInput");

const nomePasta = document.getElementById("pastamovimento");

//popup
botao.addEventListener("click", function(){

    popupPasta.classList.remove("disable");

});

cancelarPasta.addEventListener("click", function(){

    popupPasta.classList.add("disable");

});

salvarPasta.addEventListener("click", function(){

    const novoNome = novoNomeInput.value;

    if(novoNome !== null && novoNome !== ""){

        nomePasta.textContent = novoNome;
        localStorage.setItem("novo", novoNome);
    }
    popupPasta.classList.add("disable");

});

// novo nome localstorage
window.addEventListener("load", function() {
    const salvo = localStorage.getItem("novo");
    if (salvo) {
        nomePasta.textContent = salvo;
    }
});