let lista = [];
let programa = "aberto";

while (programa === "aberto"){
    let opcoes = window.prompt("1) Adicionar nome \n 2) Exibir lista \n 3) Proximo nome \n 4) Fechar programa");

    if (opcoes == 1){
        let acrescentar = "s";
        while (acrescentar == "s"){
            let pessoa = {};
            pessoa.nome = window.prompt("Nome do paciente");
            lista.push(pessoa);
            acrescentar = window.prompt("Deseja acrescentar mais um nome? (s/n)");
            if (acrescentar == "n"){
                break;
            }
        }
    } else if (opcoes == 2){
        for (let x = 0; x < lista.length; x ++){
            window.alert(lista[x].nome);
        }
    } else if (opcoes == 3){
        window.alert("O proximo paciente é " + lista[0].nome);
        lista.shift();
    } else if (opcoes == 4){
        break;
    }
}