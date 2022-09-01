function Enviar() {
    var nome = document.getElementById("nome");
    var msg = document.getElementById("msg");
    if ((nome.value != "") && (msg.value != "")){
        var aux = confirm('Obrigado sr(a) ' + nome.value + '. A sua mensagem foi enviada para nossa equipe e em breve retornaremos o contato. Obrigado.' + '\r\n\r\nSua mensagem de ' + msg.value + ' será registrada, confirma?');
        if (!aux){
            msg.value = "";
        } else {
            document.getElementById("formulario").submit();
        }
    }
}

function Empresa(){
    alert('Dados da empresa')
}