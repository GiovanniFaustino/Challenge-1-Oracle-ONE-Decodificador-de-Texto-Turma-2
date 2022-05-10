
const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnCriptografar() {
    const textoEncriptado = criptografar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none"
}

function criptografar(stringEncriptada) {
    let matrizCodigo = [["e","enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u","ufat"]];
     stringEncriptada = stringEncriptada.toLowerCase();

         for(let i = 0; i < matrizCodigo.length; i++) {
             if(stringEncriptada.includes(matrizCodigo[i][0])) {
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = descriptografar(mensagem.value)
    inputTexto.value = textoDesencriptado
    inputTexto.style.backgroundImage
}

function descriptografar(stringDescriptada) {
    let matrizCodigo = [["enter","e"],["imes", "i"],["ai", "a"],["ober", "o"],["ufat","u"]];
     stringDescriptada = stringDescriptada.toLowerCase();

         for(let i = 0; i < matrizCodigo.length; i++) {
             if(stringDescriptada.includes(matrizCodigo[i][0])) {
                  stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringDescriptada;
}
 
function btnCopiar() {
    let copyText = document.querySelector(".mensagem");
    copyText.select();
    alert("Texto Copiado!");
    document.execCommand("copy");
   
  }
  
  document.querySelector(".input-texto").addEventListener("click", copy);
  