let pessoas = [];
let form = document.querySelector('#formulario');
let campoNome = form.querySelector('[name="nome"]');
let campoEmail = form.querySelector('[name="email"]');
let campoAssunto = form.querySelector('[name="assunto"]');
let campoMensagem = form.querySelector('[name="mensagem"]');

function validacaoEmail(campoEmail) {
    usuario = campoEmail.value.substring(0, campoEmail.value.indexOf("@"));
    dominio = campoEmail.value.substring(campoEmail.value.indexOf("@")+ 1, campoEmail.value.length);
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    document.getElementById("msgemail").innerHTML="<font color='blue' size='2px' >Email Valido </font>";
    return true;
    }
    else{
        document.querySelector('#msgemail').innerHTML= "<font color='red' size='2px' >Email inválido </font>";
        alert ("Verifique o E-mail inserido e tente novamente!")
        return false;
    }
}

form.addEventListener("submit", function (evento) {
    evento.preventDefault()

    let dados = new FormData(form);

    if (validacaoEmail(campoEmail) == true){
        let novoCadastro = cadastro_de_pessoas(dados);
        pessoas.push(novoCadastro);
        alert("Dados enviados!")
    }
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

