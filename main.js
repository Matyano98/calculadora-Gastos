const listaDeTarefas = document.getElementById("taskList");
const elementoTotal = document.getElementById("total");

let tarefas = [];

// Adiciona uma nova tarefa
document.getElementById("addTask").addEventListener("click", () => {
  const descricao = document.getElementById("description").value;
  const valor = parseFloat(document.getElementById("value").value);
  const categoria = document.getElementById("category").value;

  if (descricao && !isNaN(valor) && categoria) {
    const tarefa = { id: Date.now(), descricao, valor, categoria };
    tarefas.push(tarefa);
    renderizarTarefas();
    limparCampos();
  }
});

// Renderiza a lista de tarefas na tabela
function renderizarTarefas() {
    listaDeTarefas.innerHTML = "";
    let total = 0;
  
    tarefas.forEach((tarefa) => {
      total += tarefa.valor;
  
      const linha = document.createElement("tr");
  
      linha.innerHTML = `
        <td><input type="text" value="${tarefa.descricao}" onchange="editarTarefa(${tarefa.id}, 'descricao', this.value)"></td>
        <td><input type="number" value="${tarefa.valor}" onchange="editarTarefa(${tarefa.id}, 'valor', parseFloat(this.value))"></td>
        <td><input type="text" value="${tarefa.categoria}" onchange="editarTarefa(${tarefa.id}, 'categoria', this.value)"></td>
        <td><button class="delete" onclick="excluirTarefa(${tarefa.id})">Excluir</button></td>
      `;
  
      listaDeTarefas.appendChild(linha);
    });
  
    elementoTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
  }

  // Edita a tarefa 
function editarTarefa(id, campo, valor) {
    tarefas = tarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, [campo]: valor } : tarefa
    );
    renderizarTarefas();
  }

   // Exclui uma tarefa da lista
   function excluirTarefa(id) {
    tarefas = tarefas.filter((tarefa) => tarefa.id !== id);
    renderizarTarefas();
  }
  
  // Limpa os campos de entrada
  function limparCampos() {
    document.getElementById("description").value = "";
    document.getElementById("value").value = "";
    document.getElementById("category").value = "";
  }
  
  
 
  
