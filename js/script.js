

//Recuperar o botão de envio das informações

const botaoEnviar = document.getElementById("btnNews")

//Atrelar um evento ao botão e criar uma função no corpo do evento
botaoEnviar.addEventListener("click", () => {
    //ESCOPO DA FUNÇÃO
    //AQUI NÓS VAMOS VALIDAR OS INPUTS/CAMPOS DO FORM
    //DEVEMOS RECUPAR OS INPUTS/CAMPOS
    const campos = document.querySelectorAll("input[type='text'],input[type='email']")

    //Agora eu tenho um array de elementos input[]
    for (let x = 0; x < campos.length; x++) {
        if (campos[x].value == "") {
            alert("O CAMPO " + campos[x].name + "ESTÁ SEM PREENCHIMENTO")
            return
        }
    }
})


//-----------------------------------------------------------------------
//OUTRO MÉTODO DE FAZER
//Atrelar um evento ao botão e criar uma função externa para realizar a validação
//botaoEnviar.addEventListener("click", validaCampos)

//function validaCampos(){
    //ESCOPO DA FUNÇÃO
    //AQUI VAMOS VALIDAR OS INPUTS/CAMPOS DO FORM
    //DEVEMOS RECUPERAR OS INPUTS/CAMPOS
    //const campos = document.querySelectorAll("input[type='text'],input[type='email']")

    //Agora eu tenho um array de elementos INPUT[]
    //for(let x = 0; x < campos.length ; x++){
       
            //if(campos[x].value == ""){
                //alert("O CAMPO " + campos[x].name + " está sem preenchimento!")
                //return                
            //}
    //}
//}
