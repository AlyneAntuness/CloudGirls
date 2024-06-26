function tocaSom (seletorAudio) {
   const elemento =  document.querySelector(seletorAudio);


   if (elemento && elemento.localName === 'audio') {
    
        elemento.play();
   }
   else {
    //alert('Elemento não encontrado ou seletor não encontrado');
   }

}


const listaDeTeclas = document.querySelectorAll('.tecla');

//let contador = 0;

//enquanto/repetição
//while (contador < listaDeTeclas.length;) {

//    const tecla = listaDeTeclas[contador];

//    const instrumento = tecla.classList[1];

//    const idAudio = `#som_${instrumento}`;

    //console.log(idAudio);

//    tecla.onclick = function () {
//        tocaSom(idAudio)

//    }

//    contador = (contador+ 1);

    //console.log(contador);
//}


//c esse for declaro a variavel"let" dentro dele
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio)

    }

    tecla.onkeydown = function (evento) {
                                  //ou
        if (evento.code === 'Space' || evento.code === 'Enter') {

            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

    console.log(contador);
}
