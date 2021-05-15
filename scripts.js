let pessoas = [];
let form = document.querySelector('#formulario');
let campoNome = form.querySelector('[name="nome"]');
let campoEmail = form.querySelector('[name="email"]');
let campoAssunto = form.querySelector('[name="assunto"]');
let campoMensagem = form.querySelector('[name="mensagem"]');

let dadosValidos = { 
    emailValido: validarEmail(campoEmail.value)
}

function validarEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

campoEmail.addEventListener("imput", function(){
    if (validarEmail(campoEmail.value)){
        campoEmail.classList.remove("campo_invalido");
        dadosValidos.emailValido = true;
    } else {
        campoEmail.classList.add("campo_invalido");
        dadosValidos.emailValido = false;
    }
})

form.addEventListener("submit", function (evento) {
    evento.preventDefault()

    let dados = new FormData(form);

    let novoCadastro = cadastro_de_pessoas(dados);
    
    pessoas.push(novoCadastro);
    alert("Pessoa registrada!")

})

function cadastro_de_pessoas(formData) {
    let nome = formData.get ("nome")
    let email = formData.get("email")
    let assunto = formData.get("assunto")
    let mensagem = formData.get("mensagem")

    let cadastrado = {
        nome,
        email,
        assunto,
        mensagem
    }

    return (cadastrado);
}

