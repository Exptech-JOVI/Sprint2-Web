const container = document.querySelector('.slideshow-container');
const imagens = document.querySelectorAll('.f');
let index = 0;
const temp = 2000; 

function proximo() {
    index++;

    if (index >= imagens.length) {
        index = 0;
    }

    const tam = imagens[0].offsetWidth; 
    container.scrollTo({
        left: index * tam,
        behavior: 'smooth' 
    });
}

let slide = setInterval(proximo, temp);

// pausar
container.addEventListener('mousedown', () => clearInterval(slide));
container.addEventListener('touchstart', () => clearInterval(slide));