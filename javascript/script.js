
const cartItens = []        // carrinho vazio
const addCart = document.getElementById("addFrut").value  //input
const btnAdd = document.getElementById("btn-add");   // Botão de adicionar
const btnCart = document.getElementById("btn-cart");
const containerModalVazio = document.getElementById("container-modal-vazio");
const containerOpenFrut = document.getElementById("container-modal-open");
const containerPrincipal = document.getElementById("container");  //Container Inicial
const loader = document.getElementById("loader");  // Loader

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

    containerPrincipal.style.display = "none";

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
