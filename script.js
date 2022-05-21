const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnCriptografar() {
    
    if(inputTexto.value == inputTexto.value.replace(/[^a-zA-Zs]/g, " ").toLowerCase()){
        const textoEncriptado = criptografar(inputTexto.value)
        mensagem.value = textoEncriptado 
	    mensagem.style.backgroundImage="none"
    }else{   
        alert('Digite somente letras minúsculas');
        inputTexto.value = "";
        mensagem.value = "";            
    }
}

function btnDesencriptar() {
    if(mensagem.value == mensagem.value.replace(/[^a-zA-Zs]/g, " ").toLowerCase()){
        const textoDesencriptado = descriptografar(mensagem.value)
        inputTexto.value = textoDesencriptado 
    }else{   
        alert('Digite somente letras minúsculas');
        inputTexto.value = "";
        mensagem.value = "";            
    }             
}

function criptografar(stringEncriptada) {
    let matrizCodigo = [["e","enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u","ufat"]];
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            
        }  
            
    }   
    
    return stringEncriptada;
}

function descriptografar(stringDescriptada) {
    let matrizCodigo = [["enter","e"],["imes", "i"],["ai", "a"],["ober", "o"],["ufat","u"]];
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
    inputTexto.value = "";
   
  }
  
  document.querySelector(".input-texto").addEventListener("click", copy);
  
