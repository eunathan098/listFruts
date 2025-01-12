
const cartItens = []        // carrinho vazio
const addCart = document.getElementById("addFrut").value  //input
const btnAdd = document.getElementById("btn-add");   // Botão de adicionar
const btnCart = document.getElementById("btn-cart");
const containerModalVazio = document.getElementById("container-modal-vazio");
const containerOpenFrut = document.getElementById("container-modal-open");
const containerPrincipal = document.getElementById("container");  //Container Inicial
const loader = document.getElementById("loader");  // Loader

// edit item 

const editItem = document.getElementById("edit-item");
const deleteItem = document.getElementById("delete-item");
const containerItemEditDelete = document.getElementById("item-edit-delete");

// Adicionar um nova Fruta

btnAdd.addEventListener('click', function(){
    if(cartItens.includes(addCart)){
        alert("Lamento. Já temos esta fruta.")
    } else {
        cartItens.push(addCart);
        console.log(addCart)
        alert(`Fruta ${addCart} adicionado com sucesso!`);
    }
})

// Exibir Carrinho

btnCart.addEventListener('click', function(){

    containerPrincipal.style.display = "none"

    loader.style.display = "block";

    setTimeout(function(){
        loader.style.display = "none";
    }, 2999)
    
    setTimeout(function(){
        containerOpenFrut.style.display = "block";
        containerPrincipal.style.display = "none";
    }, 3000);

    if(containerOpenFrut){
        containerOpenFrut.style.display = "none";
        containerPrincipal.style.display = "block";
    }
})

const btnFechar = document.getElementById("btn-fechar");

btnFechar.addEventListener('click', function(){
    containerOpenFrut.style.display = "none";
    containerPrincipal.style.display = "block";
})

// função editar item

editItem.addEventListener("click", function(){
    alert("Deseja editar este item selecionado ?");
    console.log("deu certo")
});

// função excluir item

deleteItem.addEventListener("click", function() {
    const deleteYes = prompt("Tem certeza que deseja excluir o item selecionado? Sim || Não");

    if (deleteYes && deleteYes.toLowerCase() === "sim") {
        alert("Item excluído com sucesso!");
        containerItemEditDelete.remove(); 
    } else {
        alert("Exclusão cancelada.");
    }
});

// Seleciona o container com a classe .teste
const container = document.querySelector('.teste');

// Variáveis para armazenar a posição inicial do mouse e do container
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

// Função que inicia o arraste quando o mouse é pressionado
container.addEventListener('mousedown', function(event) {
  isDragging = true;

  // Calcula a diferença entre a posição do mouse e a posição do container
  offsetX = event.clientX - container.offsetLeft;
  offsetY = event.clientY - container.offsetTop;

  // Evita seleção de texto durante o arraste
  event.preventDefault();
});

// Função que move o container enquanto o mouse se move
document.addEventListener('mousemove', function(event) {
  if (isDragging) {
    // Atualiza a posição do container
    container.style.left = (event.clientX - offsetX) + 'px';
    container.style.top = (event.clientY - offsetY) + 'px';
  }
});

// Função que termina o arraste quando o mouse é solto
document.addEventListener('mouseup', function() {
  isDragging = false;
});

