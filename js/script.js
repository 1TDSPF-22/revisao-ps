//Recuperar o botão de envio das informações
//const botaoEnviar = document.querySelector("#btnNews")
const botaoEnviar = document.getElementById("btnNews")

//Atrelar um evento ao botão e criar uma função do corpo do evento
botaoEnviar.addEventListener("click", validaInputs)
function validaInputs(){
    //Escopo da função
    //Aqui vamos validar os inputs do form
    //Devemos recuperar os inputs
    const inputs = document.querySelectorAll("input[type='text'],input[type='email']")

    //Agora tenho um array de elementos input[]
        for(let x = 0; x < inputs.length; x++){
            if(inputs[x].value == ""){
                alert("O campo " + inputs[x].name + "está sem preenchimento!")
                return
            }
        }
}

    //Atrelar um evento ao botão e criar uma função do corpo do evento
    //Escopo da função
    //Aqui vamos validar os inputs do form
    //Devemos recuperar os inputs
    //const inputs = document.querySelectorAll("input[type='text'],input[type='email']")

    //Agora tenho um array de elementos input[]
        //for(let x = 0; x < inputs.length; x++){
            //if(inputs[x].value == ""){
               // alert("O campo " + inputs[x].name + "está sem preenchimento!")
                //return
            //}
       // }
//})