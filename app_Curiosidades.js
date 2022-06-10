/* Carregar e Gravar Likes */
		var likesList;
		var likesOutput1;
		var dislikesOutput1;
		var likesOutput2;
		var dislikesOutput2;
		var likesOutput3;
		var dislikesOutput3;
		var likesOutput4;
		var dislikesOutput4;
		
		window.addEventListener("load",function(){
			//guarda em uma variável os elementos da sectioncuriosidade
			likesOutput1 = document.getElementById("numcurtir1");
			dislikesOutput1 = document.getElementById("numdescurtir1");
			likesOutput2 = document.getElementById("numcurtir2");
			dislikesOutput2 = document.getElementById("numdescurtir2");
			likesOutput3 = document.getElementById("numcurtir3");
			dislikesOutput3 = document.getElementById("numdescurtir3");
			likesOutput4 = document.getElementById("numcurtir4");
			dislikesOutput4 = document.getElementById("numdescurtir4");
			if(localStorage.getItem("likes")){
				readList();
				likesOutput1.innerHTML = likesList[0].curtir;
				dislikesOutput1.innerHTML = likesList[0].descurtir;
				likesOutput2.innerHTML = likesList[1].curtir;
				dislikesOutput2.innerHTML = likesList[1].descurtir;
				likesOutput3.innerHTML = likesList[2].curtir;
				dislikesOutput3.innerHTML = likesList[2].descurtir;
				likesOutput4.innerHTML = likesList[3].curtir;
				dislikesOutput4.innerHTML = likesList[3].descurtir;
			}else{
				likesList = [];
			}
			if(likesList.length == 0){
				incluirLikes();
			}
		})

		function readList(){
			likesList = JSON.parse(localStorage.getItem("likes"));
		}
		
		function incluirLikes() {
			//incluir manualmente os tipos de likes utilizados
			var item = {};
			item.id = 0;
			item.curtir = 0;
			item.descurtir = 0;
			likesList.push(item);
			saveList();

			var item = {};
			item.id = 1;
			item.curtir = 0;
			item.descurtir = 0;
			likesList.push(item);
			saveList();

			var item = {};
			item.id = 2;
			item.curtir = 0;
			item.descurtir = 0;
			likesList.push(item);
			saveList();

			var item = {};
			item.id = 3;
			item.curtir = 0;
			item.descurtir = 0;
			likesList.push(item);
			saveList();
		}

		function curtir1(){
			readList();
			likesList[0].curtir++;
			likesOutput1.innerHTML = likesList[0].curtir;
			saveList();

		}function descurtir1(){
			readList();
			likesList[0].descurtir++;
			dislikesOutput1.innerHTML = likesList[0].descurtir;
			saveList();
		}

		function curtir2(){
			readList();
			likesList[1].curtir++;
			likesOutput2.innerHTML = likesList[1].curtir;
			saveList();

		}function descurtir2(){
			readList();
			likesList[1].descurtir++;
			dislikesOutput2.innerHTML = likesList[1].descurtir;
			saveList();
		}

		function curtir3(){
			readList();
			likesList[2].curtir++;
			likesOutput3.innerHTML = likesList[2].curtir;
			saveList();

		}function descurtir3(){
			readList();
			likesList[2].descurtir++;
			dislikesOutput3.innerHTML = likesList[2].descurtir;
			saveList();
		}

		function curtir4(){
			readList();
			likesList[3].curtir++;
			likesOutput4.innerHTML = likesList[3].curtir;
			saveList();

		}function descurtir4(){
			readList();
			likesList[3].descurtir++;
			dislikesOutput4.innerHTML = likesList[3].descurtir;
			saveList();
		}

		function saveList(){
			//converte os dados em string e salva no local storage 
			localStorage.setItem("likes",JSON.stringify(likesList));
		}