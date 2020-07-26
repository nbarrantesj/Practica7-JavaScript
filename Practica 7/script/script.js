function colorAlatorio () {
    let max = 256;
    let min = 0;

    let X = Math.floor(Math.random() * (max - min) + min);
    let Y = Math.floor(Math.random() * (max - min) + min);
    let Z = Math.floor(Math.random() * (max - min) + min);

    let rgb = '';
    rgb = `rgb(${X}, ${Y}, ${Z})`;
    return rgb;
}

const texto = document.querySelectorAll(' .container p');

for (let i = 0; i < texto.length; i++) {
    texto[i].style.color = colorAlatorio();
}
