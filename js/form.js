// Eventos
var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener("click", function(event) {
	event.preventDefault();
	
	var form = document.querySelector('#form-adiciona');
	// Extraindo informações do paciente do form
	var paciente = obtemInformacoesDoForm(form);

	// validar paciente
	var erros = validaPaciente(paciente);
	if (erros.length > 0) {
		exibeMensagensErro(erros);
		return;
	}

	// Cria nova tr e td do paciente
	adicionaPacienteTabela(paciente);

	// Limpa formulário
	form.reset();

	// Limpar erros
	var mensagensErro = document.querySelector("#mensagens-erro");
	mensagensErro.innerHTML = "";

});

function adicionaPacienteTabela(paciente) {
	var pacienteTr = montaTr(paciente);

	// Adicionando paciente na tabela
	var tabela = document.querySelector("#tabela-pacientes"); // tbody
	tabela.appendChild(pacienteTr);
}

function obtemInformacoesDoForm(form) {
	// objeto: agrupa caracteristicas/propriedades de algo
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	};

	return paciente;
}

function montaTr(paciente) {
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add('paciente');

	pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
	pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
	pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
	pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
	pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

	return pacienteTr;
}

function montaTd(dado, classe) {
	var td = document.createElement('td');
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function validaPaciente(paciente) {

	var erros = [];

	if (paciente.nome.length === 0) {
		erros.push('O nome não pode ser em branco.');
	}

	if (paciente.gordura.length === 0) {
		erros.push('O campo gordura não pode ser em branco.');
	}

	if (paciente.peso.length === 0) {
		erros.push('O peso não pode ser em branco.');
	}

	if (paciente.altura.length === 0) {
		erros.push('A altura não pode ser em branco.');
	}

	if (!validaPeso(paciente.peso)) erros.push("Peso inválido.");

	if (!validaAltura(paciente.altura)) {
		erros.push('Altura inválida.');
	}

	return erros;
}

function exibeMensagensErro(erros) {
	var ul = document.querySelector('#mensagens-erro');
	// limpar erros
	ul.innerHTML = '';

	// for (var i = 0; i < erros.length; i++) {
	erros.forEach(function(erro) {
		var li = document.createElement('li');
		li.textContent = erro;
		ul.appendChild(li);
	});
}