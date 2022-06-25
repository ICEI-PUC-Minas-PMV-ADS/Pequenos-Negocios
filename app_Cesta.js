/* Carregar Cesta */
var cestaList;
var cestaOutput;

window.addEventListener("load",function(){
	//guarda em uma variável o elemento produtos-output
	cestaOutput = document.getElementById("produtos-output")
	if(localStorage.getItem("produtos")){
		readCesta()
		showCesta()
	}else{
		cestaList = [];
	}
	
	if(cestaList.length == 0){
		cestaOutput.innerHTML = "<h5> Seu carrinho de compras está vazio :( </h5>"
	}
	//adiciona o listener para o evento submit, utilizei form para usar o required do input HTML
	cestaOutput.addEventListener("click",clickCesta)
})

function clickCesta(e){
	//somente fazer algo quando clicar em um item li
	if(e.target.localName == "li"){
		e.target.dataset.excluir = (e.target.dataset.excluir === 'true')? false : true;
		cestaList[e.target.dataset.id].excluir = e.target.dataset.excluir;
		saveCesta();
	}
}

function readCesta(){
	cestaList = JSON.parse(localStorage.getItem("produtos"));
}

function saveCesta(){
	//converte os dados em string e salva no local storage 
	localStorage.setItem("produtos",JSON.stringify(cestaList));
}

function showCesta(){
	//mostra a lista de produtos
	readCesta();
	var totalCesta = cestaList.length;
	var totvalorItem = 0;
	if(totalCesta > 0){
		var htmlTemp = "<ul>";
		for(var ind = 0; ind < totalCesta; ind++){
			if(cestaList[ind].quantidade > 0){ 
				cestaList[ind].valor = cestaList[ind].quantidade*cestaList[ind].unit;
				totvalorItem = totvalorItem+cestaList[ind].valor;
				htmlTemp += "<div class='pdt-cesta-area' >" + "<img class='img-pdt' src=" + cestaList[ind].img + ">" + "<h5><li data-id='"+cestaList[ind].id+"' data-excluir='" + cestaList[ind].excluir + "'> " + cestaList[ind].nome + "<br>Quantidade: "+ cestaList[ind].quantidade + "<br>Valor: R$ "+ cestaList[ind].valor + ",00" + "</li></h5>" +"</div>"

			}
		}
		if(totvalorItem > 0){
			htmlTemp += "<h2> Total da compra: R$ "+ totvalorItem + ",00" + "</h2>";
			htmlTemp += "</ul><div class='botoes-cesta'><button type= 'submit' class='btn btn-cesta btn-warning left' onclick= 'clearCesta()'>Remover produtos selecionados</button>";
			htmlTemp += "<button type= 'submit' class='btn btn-warning' onclick= 'comprarCesta()'>Finalizar compra</button></div>";
			cestaOutput.innerHTML = htmlTemp;
		}
		else{
			htmlTemp += "</ul><h5> Seu carrinho de compras está vazio :( </h5>";
			cestaOutput.innerHTML = htmlTemp;
		}
	}
	else{
		cestaOutput.innerHTML = "<h5> Seu carrinho de compras está vazio :( </h5>";
	}
}

function clearCesta(){
	//varre a lista a procura de tarefas realizadas//
	readCesta()
	excluindo = false
	for(var ind = 0; ind < cestaList.length; ind++){
		if(cestaList[ind].excluir === 'true'){
			excluindo = true
			cestaList[ind].quantidade = 0
			cestaList[ind].valor = 0
			cestaList[ind].excluir = "false"
		}
	}
	if(excluindo == false){
		alert("Para limpar produtos da lista, clique ou toque no produto desejado...");
	}
	saveCesta();
	showCesta();
}
function comprarCesta(){
	var celular = "5521988351171";
	var texto = "Desejo comprar os seguintes itens na FerRosi:\n\n";
	readCesta();
	var totalItem = cestaList.length;
	var excluindo = false;
	var totvalorItem = 0;
	for(var ind = 0; ind < totalItem; ind++){
		if(cestaList[ind].quantidade > 0){
			if(cestaList[ind].excluir === 'true'){
				excluindo = true;
			}
			cestaList[ind].valor = cestaList[ind].quantidade*cestaList[ind].unit;
			totvalorItem = totvalorItem+cestaList[ind].valor;
			texto += "Produto: "+ cestaList[ind].nome + " - Quantidade: "+ cestaList[ind].quantidade + " - Valor: R$ "+ cestaList[ind].valor + "\n"
		}
	}
	if(excluindo == true){
		alert("Existem produtos marcados para limpeza. Limpe antes de fechar a compra...");
	}
	else if(totvalorItem > 0){
		var r=confirm("Tem certeza que deseja finalizar a compra?");
		if (r==true){
			texto += "\nTotal da compra: R$ "+ totvalorItem + ",00";
			texto = window.encodeURIComponent(texto);
			window.open("https://api.whatsapp.com/send?phone=" + celular + "&text=" + texto, "_blank");
			for(var ind = 0; ind < cestaList.length; ind++){
				cestaList[ind].quantidade = 0;
				cestaList[ind].excluir = "false";				
			}
			saveCesta();
			showCesta();
		  }
	}
	else {
		alert("Seu carrinho de compras está vazio!");
	}
}

