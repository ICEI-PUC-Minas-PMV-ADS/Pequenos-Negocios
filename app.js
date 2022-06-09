/* Carregar Produtos */
		var itensList;
		var itensOutput;
		
		window.addEventListener("load",function(){
			//guarda em uma variável o elemento itens-output
			itensOutput = document.getElementById("itens-output")
			if(localStorage.getItem("itens")){
				itensList = JSON.parse(localStorage.getItem("itens"));
				showList()
			}else{
				itensList = [];
			}
			
			if(itensList.length == 0){
				itensOutput.innerHTML = "Nenhum item cadastrado"
			}
			//adiciona o listener para o evento submit, utilizei form para usar o required do input HTML
			document.getElementById("form-itens").addEventListener("submit",onSubmit);
			itensOutput.addEventListener("click",clickList)
		})
		
		function clickList(e){
			//somente fazer algo quando clicar em um item li
			if(e.target.localName == "li"){
				e.target.dataset.excluir = (e.target.dataset.excluir === 'true')? false : true;
				itensList[e.target.dataset.id].excluir = e.target.dataset.excluir;
				saveList();
			}else if(e.target.localName == "button"){
				clearList()
			}
		}

		function onSubmit(e){
			var task = {};
			//pego o valor cadastrado nos inputs do form
			task.id = itensList.length;
			task.nome = e.target[0].value;
			task.quantidade = e.target[1].value;
			task.unit = e.target[2].value;
			task.valor = 0;
			task.excluir = "false";
			
			//adicionando a task na lista
			itensList.push(task);
			saveList();
			showList();
			// utiliza o preventDefault para evitar do form realizar o reload da página
			e.preventDefault();
		}
		
		function saveList(){
			//converte os dados em string e salva no local storage 
			localStorage.setItem("itens",JSON.stringify(itensList));
		}

		function showList(){
			//mostra a lista de itens
			var total = itensList.length;
			var totvalor = 0;
			if(total > 0){
				var htmlTemp = "<ul>"; 
				for(var i = 0; i < total; i++){
					if(itensList[i].quantidade > 0){
						itensList[i].valor = itensList[i].quantidade*itensList[i].unit;
						totvalor = totvalor+itensList[i].valor;
						htmlTemp += "<li data-id='"+itensList[i].id+"' data-excluir='" + itensList[i].excluir + "'>"+ itensList[i].nome + " - Quantidade: "+ itensList[i].quantidade + " - Valor: R$ "+ itensList[i].valor + "</li>"
					}
				}
				if(totvalor > 0){
					htmlTemp += "<h2> Total da compra: R$ "+totvalor+"</h2>";
				    itensOutput.innerHTML = htmlTemp;
				}
				htmlTemp += "</ul><button>Limpar itens Marcados</button>";
				itensOutput.innerHTML = htmlTemp;
			}else{
				itensOutput.innerHTML = "<h2> Nenhum item cadastrado </h2>"
			}
		}

		function clearList(){
			//varre a lista a procura de tarefas realizadas
			for(var i = 0; i < itensList.length; i++){
				if(itensList[i].excluir === 'true'){
					itensList.splice(i, 1);  //remove 1 elemento na posição i;
					i = 0;  //voltando o indice no array para validar novamente a lista
				}else{
					itensList[i].id = i;
				}
			}
			showList();
			saveList();
		}
		