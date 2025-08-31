let imagem = document.querySelector(".copo-starbucks")

function trocaImagem(copo) {
    imagem.src = copo
}

const circulo = document.querySelector('.circulo');
const menuImages = document.querySelectorAll('.botao-menu')

menuImages.forEach(img => {
    img.addEventListener('click', () => {
        circulo.style.backgroundColor = img.getAttribute('data-color');
    });
});    