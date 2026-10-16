var tarefas = [
    {
        id : 1,
        texto: "estudar CSS e HTML",
        comcluida : false 
    }
]

var listaDetarefas = document.getElementsByClassName("lista-tarefas")
var imputTarefa = document.getElementById("imput-tarefas")

function salvarTarefasLocalStored(){
    var tarefaString = JSON.stringify(tarefas);
    localStorage.setItem("tarefas,json")
}
function AdicionarTarefa(){
    desenharTarefas() 
        var texto = inputTarefa.value.trim();
        var novaTarefa = {
        id : tarefas[tarefas.length - 1].id + 1,
        texto :texto,
        concluida : false  
        }
} 

function excluirTarefa(id){
    tarefas.filter(tarefa => tarefa.id !== id);

    desenharTarefas();
}

function alternarTarefa(id){
    for (var i = 0; i < tarefas.length; i++){
        if(tarefas[i].id === id){
            index = i;
        }
    }

    tarefas[index].concluida =! tarefas[index].concluida;
    desenharTarefas();
}


function desenharTarefas() {

    listaDetarefas.innerHTML = "";

   for (var i = 0;i < tarefas.length; i++) {
    var icone = tarefas[i].concluida ? "radio_button_checked" : "radio_button_unchecked";
    var classes = tarefas[i].concluida ? "tarefa tarefa_concluda" : "tarefa";
   }
    
    
    listaDetarefas.innerHTML += `
    <li class = "tarefa">
                    
                    <span class="tarefa-texto">
                        Estudar java script
                    </span>

                    <span class="botao-excluair" >
                        
                    </span>

                    
                </li>
    `;
}

desenharTarefas();