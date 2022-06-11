/* Carregar Produtos */
		var produtosList;
		var produtosOutput;
		
		window.addEventListener("load",function(){
			//guarda em uma variável os elementos da main-produtos
			produtosOutput = document.getElementById("galleryproducts");
			if(localStorage.getItem("produtos")){
				readList();
			}else{
				produtosList = [];
			}
			
			if(produtosList.length == 0){
				IncluirProdutos();
			}
			//adiciona o listener para o evento submit, utilizei form para usar o required do input HTML
			//document.getElementById("galleryproducts").addEventListener("submit",onSubmit);
			//produtosOutput.addEventListener("click",clickButton);
		})

		function readList(){
			produtosList = JSON.parse(localStorage.getItem("produtos"));
		}
		
		function IncluirProdutos() {
			//incluir manualmente os produtos que serão vendidos
			var item = {};
			item.id = 0;
			item.img = "imagens/Produto1.png";
			item.nome = "Biscoito Amanteigado Goiaba 100g";
			item.quantidade = 0;
			item.unit = 15;
			item.valor = 0;
			item.excluir = "false";
			//adicionando a variável na lista
			produtosList.push(item);
			saveList();

			var item = {};
			item.id = 1;
			item.img = "imagens/Produto2.png";
			item.nome = "Biscoito Amanteigado Ervas Finas 50g";
			item.quantidade = 0;
			item.unit = 7;
			item.valor = 0;
			item.excluir = "false";
			//adicionando a variável na lista
			produtosList.push(item);
			saveList();

			var item = {};
			item.id = 2;
			item.img = "imagens/Produto3.png";
			item.nome = "Biscoito Amanteigado Chocolate 50g";
			item.quantidade = 0;
			item.unit = 8;
			item.valor = 0;
			item.excluir = "false";
			//adicionando a variável na lista
			produtosList.push(item);
			saveList();

			var item = {};
			item.id = 3;
			item.img = "imagens/Produto4.png";
			item.nome = "Biscoito Amanteigado Cebola 100g";
			item.quantidade = 0;
			item.unit = 16;
			item.valor = 0;
			item.excluir = "false";
			//adicionando a variável na lista
			produtosList.push(item);
			saveList();

			var item = {};
			item.id = 4;
			item.img = "imagens/Produto5.png";
			item.nome = "Biscoito Amanteigado Queijo 100g";
			item.quantidade = 0;
			item.unit = 16;
			item.valor = 0;
			item.excluir = "false";
			//adicionando a variável na lista
			produtosList.push(item);
			saveList();

			var item = {};
			item.id = 5;
			item.img = "imagens/Produto6.png";
			item.nome = "Bolo de Aniversário 10cm e 02 Doces";
			item.quantidade = 0;
			item.unit = 20;
			item.valor = 0;
			item.excluir = "false";
			//adicionando a variável na lista
			produtosList.push(item);
			saveList();

			var item = {};
			item.id = 6;
			item.img = "imagens/Produto7.png";
			item.nome = "Caixa de Bolo no Pote";
			item.quantidade = 0;
			item.unit = 30;
			item.valor = 0;
			item.excluir = "false";
			//adicionando a variável na lista
			produtosList.push(item);
			saveList();

			var item = {};
			item.id = 7;
			item.img = "imagens/Produto8.png";
			item.nome = "Caneca com Cookie";
			item.quantidade = 0;
			item.unit = 55;
			item.valor = 0;
			item.excluir = "false";
			//adicionando a variável na lista
			produtosList.push(item);
			saveList();

			var item = {};
			item.id = 8;
			item.img = "imagens/Produto9.png";
			item.nome = "Doces Diversos";
			item.quantidade = 0;
			item.unit = 4;
			item.valor = 0;
			item.excluir = "false";
			//adicionando a variável na lista
			produtosList.push(item);
			saveList();
		}

		function clickButton1(){
			readList();
			produtosList[0].quantidade++;
			saveList();
		    showCesta();
		}

		function clickButton2(){
			readList();
			produtosList[1].quantidade++;
			saveList();
			showCesta();
		}

		function clickButton3(){
			readList();
			produtosList[2].quantidade++;
			saveList();
			showCesta();
		}

		function clickButton4(){
			readList();
			produtosList[3].quantidade++;
			saveList();
			showCesta();
		}

		function clickButton5(){
			readList();
			produtosList[4].quantidade++;
			saveList();
			showCesta();
		}

		function clickButton6(){
			readList();
			produtosList[5].quantidade++;
			saveList();
			showCesta();
		}

		function clickButton7(){
			readList();
			produtosList[6].quantidade++;
			saveList();
			showCesta();
		}

		function clickButton8(){
			readList();
			produtosList[7].quantidade++;
			saveList();
			showCesta();
		}

		function clickButton9(){
			readList();
			produtosList[8].quantidade++;
			saveList();
			showCesta();
		}

		function saveList(){
			//converte os dados em string e salva no local storage 
			localStorage.setItem("produtos",JSON.stringify(produtosList));
		}