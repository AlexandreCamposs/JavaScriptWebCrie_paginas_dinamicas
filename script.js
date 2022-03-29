// function tocarSomPom() {
//     document.querySelector('#som_tecla_pom').play();
// }
// document.querySelector('.tecla_pom').onclick = tocarSomPom;

// function tocarSomClap() {
//     document.querySelector('#som_tecla_clap').play();
// }
// document.querySelector('.tecla_clap').onclick = tocarSomClap;

// function tocarSomTim() {
//     document.querySelector('#som_tecla_tim').play();
// }
// document.querySelector('.tecla_tim').onclick = tocarSomTim;

// function tocarSomPuff() {
//     document.querySelector('#som_tecla_puff').play();
// }
// document.querySelector('.tecla_puff').onclick = tocarSomPuff;

// function tocarSomSplash() {
//     document.querySelector('#som_tecla_splash').play();
// }
// document.querySelector('.tecla_splash').onclick = tocarSomSplash;

// function tocarSomToim() {
//     document.querySelector('#som_tecla_toim').play();
// }
// document.querySelector('.tecla_toim').onclick = tocarSomToim;

// function tocarSomPsh() {
//     document.querySelector('#som_tecla_psh').play();
// }
// document.querySelector('.tecla_psh').onclick = tocarSomPsh;

// function tocarSomTic() {
//     document.querySelector('#som_tecla_tic').play();
// }
// document.querySelector('.tecla_tic').onclick = tocarSomTic;

// function tocarSomTom() {
//     document.querySelector('#som_tecla_tom').play();
// }
// document.querySelector('.tecla_tom').onclick = tocarSomTom;


// function tocarSom(idElementoAudio) {
//         document.querySelector(idElementoAudio).play();
//     }

// const listaDeTeclas = document.querySelectorAll('.tecla');

// let contador = 0;

// //enquanto
// while (contador < listaDeTeclas.length) {

//     const tecla = listaDeTeclas[contador];
//     const instrumento = tecla.classList[1];
//     //template string
//     const idAudio = `#som_${instrumento}`;

//     // console.log(idAudio);

//     tecla.onclick = function() {
//         tocarSom(idAudio);
//     }

//     contador = contador +1;

//     // console.log(contador);
// }

//para
function tocarSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
 
for (let contador = 0; contador < listaDeTeclas.length; contador ++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;    //template string

    tecla.onclick = function() {
        tocarSom(idAudio);
    }

    tecla.onkeydown = function(evento) {

        if (evendo.code === 'Space' || evendo.code ===  'Enter'){
            tecla.classList.add('ativa');
        }
        // if (evendo.code === 'Enter'){
        //     tecla.classList.add('ativa');
        // }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
    
}