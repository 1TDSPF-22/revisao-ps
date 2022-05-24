//Recuperar o botão de envio das informações
const botaoEnviar = document.getElementById("btnNews")

//Atrelar um evento ao botão e criar uma função no corpo do evento
botaoEnviar.addEventListener("click", () =>{
    //ESCOPO DA FUNÇÃO
    //AQUI VAMOS VALIDAR OS INPUTS DO FORM
    //DEVEMOS RECUPAR OS INPUTS/CAMPOS
    const campos = document.querySelectorAll("input[type='text'], input[type='email']")

    //Agora eu tenho um Array de elementos INPUT[]
    for(let x = 0; x < campos.length; x++){
        if(campos[x].value == ""){
            alert('O CAMPO ' + campos[x].name + " está sem preenchimento!")
            return
        }
    }
})