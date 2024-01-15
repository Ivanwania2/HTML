function logar() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "admin" && senha == "navi2412") {
        alert('Login efetuado com sucesso!');
        location.href = "https://www.wibmultimarcas.com.br/cliente.html";
    } else {
        alert('Usuário ou senha incorretos');
    }

}