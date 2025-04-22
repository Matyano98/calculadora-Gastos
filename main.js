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
