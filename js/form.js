
//class contato

class contato {

    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }

}

function Post(form) {
    try {
        let data = new contato(
            form.elements.namedItem("nome") ? form.elements.namedItem("nome").value : "",
            form.elements.namedItem("sobrenome") ? form.elements.namedItem("sobrenome").value : "",
            form.elements.namedItem("email") ? form.elements.namedItem("email").value : "",
            form.elements.namedItem("cpf") ? form.elements.namedItem("cpf").value : "",
            form.elements.namedItem("telefone") ? form.elements.namedItem("telefone").value : "",
            form.elements.namedItem("contato") ? form.elements.namedItem("contato").value : ""
        );


        console.log(data);
    } catch (error) {
        console.error("Erro ao processar dados do formulário:", error);
    }
}

function Enviar() {

    var nome = document.getElementById("nomeid");
    const checkbox = document.getElementById("termos");


    if (nome.value != "" && checkbox.checked) {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
    else if (nome.value != "") {
        alert('Por favor, aceite os termos de uso para enviar o formulário');
    }
    else if (checkbox.checked) {
        alert('Por favor, preencha o campo nome para enviar o formulário');
    }
    else {
        alert('Por favor, preencha todos os campos e aceite os termos de uso para enviar o formulário');
    }

}