function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    if (elemento != null && elemento.localName === 'audio') { // if = se tal coisa... && operador lógico para and / null = sem valor or false
        elemento.play();
        }
    else {console.log('Elemento não encontrado ou seletor inválido') //else = se não
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');
//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

}
for (let indice = 0; indice < listaDeTeclas.length; indice++) {
  const tecla = listaDeTeclas[indice];

  tecla.onkeydown = function (evento) {
    if(evento.code === "Enter" || evento.code === "Space") {
    tecla.classList.add('ativa');
    }
  }
  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }

}