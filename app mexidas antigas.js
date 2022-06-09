/* Carregar Produtos */
var itensList;
var itensOutput;
		
window.addEventListener("load",function(){
	//guarda em uma variável o elemento tasks-output
	itensOutput = document.getElementById("tasks-output")
	if(localStorage.getItem("tasks")){
		itensList = JSON.parse(localStorage.getItem("tasks"));
	    showList()
	}else{
		itensList = [];
	}
			
	if(itensList.length == 0){
		//cadastrar os produtos na variável
		const itens = [
			{
				id: 0,
				nome: 'Biscoito Amanteigado Goiaba 100g',
				quantidade: 0,
				unit: 15,
				valor: 0 
			},
			{
				id: 1,
				nome: 'Biscoito Amanteigado Ervas Finas 50g',
				quantidade: 0,
				unit: 7,
				valor: 0
			},
			{
				id: 2,
				nome: 'Biscoito Amanteigado Chocolate 50g',
				quantidade: 0,
				unit: 8,
				valor: 0
			},
			{
				id: 3,
				nome: 'Biscoito Amanteigado Cebola 100g',
				quantidade: 0,
				unit: 16,
				valor: 0
			},
			{
				id: 4,
				nome: 'Biscoito Amanteigado Queijo 100g',
				quantidade: 0,
				unit: 16,
				valor: 0
			},
			{
				id: 5,
				nome: 'Bolo de Aniversário 10cm e 02 Doces',
				quantidade: 0,
				unit: 20,
				valor: 0
			},
			{
				id: 6,
				nome: 'Caixa de Bolo no Pote',
				quantidade: 0,
				unit: 30,
				valor: 0
			},
			{
				id: 7,
				nome: 'Caneca com Cookie',
				quantidade: 0,
				unit: 55,
				valor: 0
			},
			{
				id: 8,
				nome: 'Doces Diversos',
				quantidade: 0,
				unit: 4,
				valor: 0
			},	
		]
		//salvar conteúdo da variável no localhost
		saveList();
		showList();
	}
})
			
		function onSubmit(e){
			var task = {};
		
			//pego o valor cadastrado no primeiro input do meu form
			task.descricao = e.target[0].value;
			task.date = new Date();
			task.id = todoList.length;
			task.done = "false";
			
			//adicionando a task na lista
			todoList.push(task);
			saveList();
			showList();
			// utiliza o preventDefault para evitar do form realizar o reload da página
			e.preventDefault();
		}

		function onSubmit(e){
			var task = {};
		
			//pego o valor cadastrado no primeiro input do meu form
			task.descricao = e.target[0].value;
			task.date = new Date();
			task.id = todoList.length;
			task.done = "false";
			
			//adicionando a task na lista
			todoList.push(task);
			saveList();
			showList();
			// utiliza o preventDefault para evitar do form realizar o reload da página
			e.preventDefault();
		}
		
		function saveList(){
			//converte os dados em string e salva no local storage 
			localStorage.setItem("tasks",JSON.stringify(itens));
		}
		
		function clearList(){
			//varre a lista a procura de tarefas realizadas
			for(var i = 0; i < todoList.length; i++){
				if(todoList[i].done === 'true'){
					todoList.splice(i, 1);  //remove 1 elemento na posição i;
					i = 0;  //voltando o indice no array para validar novamente a lista
				}else{
					todoList[i].id = i;
				}
			}
			showList();
			saveList();
		}
		
		function showList(){
			//mostra a lista de todo
			var total = todoList.length;
			if(total > 0){
				var htmlTemp = "<ul>"; 
				for(var i = 0; i < total; i++){
					htmlTemp += "<li data-id='"+todoList[i].id+"' data-done='" + todoList[i].done + "'>"+ todoList[i].descricao + " - "+ formatDate(todoList[i].date)+"</li>"
				}
				htmlTemp += "</ul><button>Limpar tarefas realizadas</button>";
				todoOutput.innerHTML = htmlTemp;
			}else{
				todoOutput.innerHTML = "Nenhuma tarefa cadastrada"
			}
		}
		
		function formatDate(date){
			// formata a data para o formato DD/MM/YYYY
			var time = new Date(date);
			var saida = time.getDate() +"/"+ time.getMonth() + "/" + time.getFullYear();
			return saida;
		}