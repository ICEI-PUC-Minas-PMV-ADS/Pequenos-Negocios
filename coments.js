/* Exemplo de código TEMPORÁRIO com exemplos de gravação, alteração, exclusão e crítica */
var todoList;
		var todoOutput;
		
		window.addEventListener("load",function(){
			//guarda em uma variável o elemento tasks-output
			todoOutput = document.getElementById("coment-box")
			if(localStorage.getItem("comentarios")){
				todoList = JSON.parse(localStorage.getItem("comentarios"));
				showList()
			}else{
				todoList = [];
			}
			
			if(todoList.length == 0){
				todoOutput.innerHTML = "Nenhum comentário"
			}
			//adiciona o listener para o evento submit, utilizei form para usar o required do input HTML
			document.getElementById("form").addEventListener("submit",onSubmit);
			todoOutput.addEventListener("click",clickList)
        })
		
		function clickList(e){
			//somente fazer algo quando clicar em um item li
			if(e.target.localName == "li"){
				e.target.dataset.done = (e.target.dataset.done === 'true')? false : true;
				todoList[e.target.dataset.id].done = e.target.dataset.done;
				saveList2();
			}else if(e.target.localName == "button"){
				clearList()
			}
		}
		
		function onSubmit(e){
			var task = {};
		
			//pego o valor cadastrado no primeiro input do meu form
			
            task.nome = e.target[0].value;
            task.descricao = e.target [1].value;
			task.date = new Date();
            task.id = todoList.length;
			task.done = "false";
			
			//adicionando a task na lista
			todoList.push(task);
			saveList2();
			showList();
			// utiliza o preventDefault para evitar do form realizar o reload da página
			e.preventDefault();
		}
		
		function saveList2(){
			//converte os dados em string e salva no local storage 
			localStorage.setItem("comentarios",JSON.stringify(todoList));
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
			saveList2();
		}
		
		function showList(){
			//mostra a lista de todo
			var total = todoList.length;
			if(total > 0){
				var htmlTemp = "<ul>"; 
				for(var i = 0; i < total; i++){
					htmlTemp += "<h5><li data-id='"+todoList[i].id+"' data-done='" + todoList[i].done + "'>" + todoList[i].nome + " - " + todoList[i].descricao + " - "+ formatDate(todoList[i].date)+"</li><h5>"
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