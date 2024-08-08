let lista = [];
let programa = "aberto";

function acrescentarPaciente(nome, sobrenome, idade, urgencia){
    let pessoa = Object.create({});
    pessoa.nome = nome;
    pessoa.sobrenome = sobrenome;
    pessoa.idade = idade;
    pessoa.urgencia = urgencia;
    return pessoa;
}

while (programa == "aberto"){
    let opcoes = window.prompt("1) Adicinar Paciente \n 2) Exibir Lista \n 3) Proximo Nome \n 4) Fechar Programa");
    if (opcoes == 1){
        let nome = window.prompt("Primeiro Nome:");
        let sobrenome = window.prompt("Sobrenome: ");
        let idade = parseInt(window.prompt("Idade do paciente"));
        let urgencia = window.prompt("Paciente precisa ser atendido urgentemente? (s/n)");

        let paciente = acrescentarPaciente(nome, sobrenome, idade, urgencia);
        
        if(idade > 75 || urgencia == "s"){
            lista.unshift(paciente);
        }else {
            lista.push(paciente);
        }
    } else if (opcoes == 2){
        for(let x = 0; x < lista.length; x++){
            window.alert(`Nome: ${lista[x].nome} \n Sobrenome: ${lista[x].sobrenome} \n Idade: ${lista[x].idade} \n Urgencia: ${lista[x].urgencia}`)
        }
    } else if (opcoes == 3){
        window.alert(`Proximo Paciente: \n ${lista[0].nome} ${lista[0].sobrenome}`);
        lista.shift();
    }else if (opcoes == 4){
        break;
    }
}