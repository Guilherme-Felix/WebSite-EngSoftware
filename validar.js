function validar() {
var pt1 = form1.email.value.indexOf("@");
var nome = form1.nome.value;
var mail = form1.email.value;
var assunto = form1.assunto.value;
var mensagem = form1.mensagem.value;


if (nome == "") {
alert('Preencha o campo com seu nome');
form1.nome.focus();
return false;
}

if (mail == "" || pt1 <= 2) {
alert('Preencha o campo com um email valido');
form1.email.focus();
return false;
}

if (assunto == "") {
alert('Preencha o campo com um assunto');
form1.assunto.focus();
return false;
}

if (mensagem == "") {
alert('Preencha o campo com uma mensagem');
form1.mensagem.focus();
return false;
}
}

function validarzona() {
	var codigo = form3.codigo.value;
	var precom2 = form3.preco.value;
	var descricao = form3.descricao.value;
	
	if(codigo == ""){
		alert('Preencha o Codigo');
		form3.codigo.focus();
		return false;
	}
	
	if(precom2 == ""){
		alert('Preencha o Preço Metro Quadrado');
		form3.preco.focus();
		return false;
	}
	
	if(descricao == ""){
		alert('Preencha a Descrição');
		form3.descricao.focus();
		return false;
	}
	alert('Zona Imobiliaria Cadastrada');
	
}

function validarfuncionario() {
	var pt1 = form4.email.value.indexOf("@");
	var nome = form4.nome.value;
	var cpf = form4.CPF.value;
	var rg = form4.RG.value;
	var oexp = form4.Exp.value;
	var emissao = form4.Emissao.value;
	var tel = form4.tel.value;
	var cel = form4.cel.value;
	var email = form4.email.value;
	var dtNasc = form4.dtNasc.value;
	var dtAdmissao = form4.dtAdmissao.value;
	var login = form4.login.value;
	var senha = form4.senha.value;
	
	if(nome == ""){
		alert('Preencha o Nome');
		form4.nome.focus();
		return false;
	}
	
		
	if(cpf == ""){
		alert('Preencha o CPF');
		form4.CPF.focus();
		return false;
	}
	
	if(rg == ""){
		alert('Preencha o RG');
		form4.RG.focus();
		return false;
	}
	
	if(oexp == ""){
		alert('Preencha o Orgao Expedidor');
		form4.Exp.focus();
		return false;
	}
	
	if(emissao == ""){
		alert('Preencha a Data de Emissao');
		form4.Emissao.focus();
		return false;
	}
	
	if(tel == "" && cel == ""){
		alert('Preencha o Telefone ou Celular');
		form4.tel.focus();
		return false;
	}
	
	if(email == "" || pt1 <= 2){
		alert('Preencha com um email valido');
		form4.email.focus();
		return false;
	}
	
	if(dtNasc == ""){
		alert('Preencha a Data de Nascimento');
		form4.dtNasc.focus();
		return false;
	}
	
	if(dtAdmissao == ""){
		alert('Preencha a Data de Admissao');
		form4.dtAdmissao.focus();
		return false;
	}
	
	if(login == ""){
		alert('Preencha o Login');
		form4.login.focus();
		return false;
	}
	
	if(senha == ""){
		alert('Preencha o Login');
		form4.login.focus();
		return false;
	}
	alert('Funcionario Registrado');
}

function validarproduto() {
	alert('Imovel Cadastrado');
	
}