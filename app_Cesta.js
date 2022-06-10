/* Carregar Produtos */
		var produtosList;
		var produtosOutput;
		
		window.addEventListener("load",function(){
			//guarda em uma variável o elemento produtos-output
			produtosOutput = document.getElementById("produtos-output")
			if(localStorage.getItem("produtos")){
				readList()
				showList()
			}else{
				produtosList = [];
			}
			
			if(produtosList.length == 0){
				produtosOutput.innerHTML = "<h5> Seu carrinho de compras está vazio :( </h5>"
			}
			//adiciona o listener para o evento submit, utilizei form para usar o required do input HTML
			produtosOutput.addEventListener("click",clickList)
		})
		
		function clickList(e){
			//somente fazer algo quando clicar em um item li
			if(e.target.localName == "li"){
				e.target.dataset.excluir = (e.target.dataset.excluir === 'true')? false : true;
				produtosList[e.target.dataset.id].excluir = e.target.dataset.excluir;
				saveList();
			}
		}
	
		function readList(){
			produtosList = JSON.parse(localStorage.getItem("produtos"));
		}
		
		function saveList(){
			//converte os dados em string e salva no local storage 
			localStorage.setItem("produtos",JSON.stringify(produtosList));
		}

		function showList(){
			//mostra a lista de produtos
			readList();
			var total = produtosList.length;
			var totvalor = 0;
			if(total > 0){
				var htmlTemp = "<ul>";
				for(var i = 0; i < total; i++){
					if(produtosList[i].quantidade > 0){ 
						produtosList[i].valor = produtosList[i].quantidade*produtosList[i].unit;
						totvalor = totvalor+produtosList[i].valor;
						htmlTemp += "<h5><li data-id='"+produtosList[i].id+"' data-excluir='" + produtosList[i].excluir + "'><img src="+produtosList[i].img+">" + produtosList[i].nome + " - Quantidade: "+ produtosList[i].quantidade + " - Valor: R$ "+ produtosList[i].valor + "</li></h5>"
					}
				}
				if(totvalor > 0){
					htmlTemp += "<h2> Total da compra: R$ "+totvalor+"</h2>";
					htmlTemp += "</ul><button type= 'submit' class='btn btn-warning left' onclick= 'clearList()'>Limpar produtos Marcados</button> ";
					htmlTemp += "<button type= 'submit' class='btn btn-warning' onclick= 'comprar()'>Finalizar compra</button>";
					produtosOutput.innerHTML = htmlTemp;
				}
				else{
					htmlTemp += "</ul><h5> Seu carrinho de compras está vazio :( </h5>";
					produtosOutput.innerHTML = htmlTemp;
				}
			}
			else{
				produtosOutput.innerHTML = "<h5> Seu carrinho de compras está vazio :( </h5>";
			}
		}

		function clearList(){
			//varre a lista a procura de tarefas realizadas//
			readList()
			for(var i = 0; i < produtosList.length; i++){
				if(produtosList[i].excluir === 'true'){
					produtosList[i].quantidade = 0
					produtosList[i].valor = 0
					produtosList[i].excluir = "false"
				}
			}
			saveList();
			showList();
		}
		function comprar(){
			var celular = "5521988351171";
			var texto = "Desejo comprar os seguintes itens na FerRosi:\n\n";
			readList();
			var total = produtosList.length;
			var totvalor = 0;
			for(var i = 0; i < total; i++){
				if(produtosList[i].quantidade > 0){
					produtosList[i].valor = produtosList[i].quantidade*produtosList[i].unit;
					totvalor = totvalor+produtosList[i].valor;
					texto += "Produto: "+ produtosList[i].nome + " - Quantidade: "+ produtosList[i].quantidade + " - Valor: R$ "+ produtosList[i].valor + "\n"
				}
			}
			if(totvalor > 0){
				var r=confirm("Tem certeza que deseja finalizar a compra?");
				if (r==true){
					texto += "\nTotal da compra: R$ "+totvalor;
					texto = window.encodeURIComponent(texto);
					window.open("https://api.whatsapp.com/send?phone=" + celular + "&text=" + texto, "_blank");
					for(var i = 0; i < produtosList.length; i++){
						produtosList[i].quantidade = 0;
						produtosList[i].excluir = "false";				
					}
					saveList();
					showList();
  				}
			}
			else {
				alert("Seu carrinho de compras está vazio!");
			}
		}