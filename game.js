const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame() {
    let canvasSize;

    if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
    } else {
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    const elementsSize = canvasSize / 10;

    console.log({ canvasSize, elementsSize });

    game.font = elementsSize + 'px Verdana';
    game.textAlign = 'end';

    for (let i = 0; i <= 10; i++) {
        game.fillText(emojis['X'], elementsSize * i, elementsSize * i);
    }

    //window.innerHeigut
    //window.innerWodth

    //game.&*()
    //game.fillRect(50,0,100,100);
    //game.clearRect(0,0,100,50);
    //game.clearRect();
    //game.clearRect(0,0,50,50);

    //game.font = '25px Verdana'
    //game.fillStyle = 'purple';
    //game.textAlign = 'end';
    //game.fillText('Platzi', 50, 50);

}