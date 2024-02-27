let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let contador = 0;

function addTarefa(){
    //PEGAR O VALO DIGITADO NO INPUT
    let valorInput = input.value;
  
    //SE O VALOR NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    if((valorInput!=="") && (valorInput!==null) && (valorInput!==undefined)){

    //adicionar um contador para deletar
    ++contador;


        let novoItem  = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})"  class="item-icone">
            <i class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
        </div>
    </div>`;

     //adicionar novo item no main
        document.getElementById('ilista').innerHTML += novoItem;

    //zerar os campinhos
        input.value = ""
    //deixar o campo input focado
        input.focus();

   

    } 
}

//deletar o item da lista
function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if(classe ==="item"){
        item.classList.add(clicado);
    }
}



input.addEventListener("keyup", function(event){
    //SE TECLOU ENTER (13)
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }


})



