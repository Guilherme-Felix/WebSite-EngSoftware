function validarlogin() { 
var login = form2.login.value;
var senha = form2.senha.value;

if (login == "") {
alert('Preencha o campo Login');
form2.login.focus();
return false;
}

if (senha == "") {
alert('Preencha o campo Senha');
form2.senha.focus();
return false;
}
if (senha == "admin") {
	if(login=="admin"){
		alert('logado');
		window.location.replace("logado.html");
		return true;
	}
}
if (senha != "admin") {
	if(login!="admin")
alert('usuario ou senha incorreto');
 
return false;
}
}
