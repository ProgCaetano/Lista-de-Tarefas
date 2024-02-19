let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');

function addTarefa(){
    //PEGAR O VALO DIGITADO NO INPUT
    let valorInput = input.value;

    //SE O VALOR NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    if((valorInput!=="") && (valorInput!==null) && (valorInput!==undefined)){
        let novoItem = `<div class="item">
        <div class="item-icone">
            <i class="mdi mdi-circle-outline"></i>
        </div>
        <div class="item-nome">
            texte de Tarefa
        </div>
        <div class="item-botao">
            <button class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
        </div>
    </div>`;

    main.innerHTML += novoItem;

    } 
}