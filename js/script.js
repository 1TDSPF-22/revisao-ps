//Recuperar o botão das informações
//const botaoEnviar = document.querySelector("#btnNews")
const botaoEnviar = document.getElementById("btnNews")

//atrelar um evento ao botao e criar uma função do corpo com evento
//botaaoEnviar.addEventListener("click", ()=>{
    //Escopo da função
    //Aqui vamos validar os inputs/campos do form
    //Devemos recuperar os inputs/campos
    //const campos = document.querySelectorAll("input[type='text'], input[type='email']")

    //Agora eu tenho um arrray de elementos inputs[]
    //for(let x = 0; x < campos.length; x++){
      //  if(campos[x].value == ""){
        //    alert('O campo ' + campos[x].name + " está sem preenchimento!")
          //  return
       // }
        
    //}

//})

function validaCampos(){
    //Escopo da função
    //Aqui vamos validar os inputs/campos do form
    //Devemos recuperar os inputs/campos
    const campos = document.querySelectorAll("input[type='text'], input[type='email']")

    //Agora eu tenho um arrray de elementos inputs[]
    for(let x = 0; x < campos.length; x++){
        if(campos[x].value == ""){
            alert('O campo ' + campos[x].name + " está sem preenchimento!")
            return
        }
        
    }
}