var items = [];

document.querySelector('input[type=submit]').addEventListener('click',()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var valorProduto = document.querySelector('input[name=valor_produto]');

    items.push({
        nome: nomeProduto.value,
        valor: valorProduto.value
    })

    let listaProdutos = document.querySelector('.lista-produtos');
    let soma = 0;
    listaProdutos.innerHTML = "";
    items.map(function(val){
        soma+=parseFloat(val.valor);
        listaProdutos.innerHTML+=`
        <div class="lista-produto-single">
        <h3>`+val.nome+`</h3>
        <h4 class="price-produto"><span>R$`+val.valor+`</span></h4>
      </div>
        `;
    })
    soma = soma.toFixed(2);
    nomeProduto.value = "";
    valorProduto.value = "";

    let elementoSoma = document.querySelector('.soma-produto h1');
    elementoSoma.innerHTML = 'Total da Lista: '+soma;
});

document.querySelector('button[name=limpar]').addEventListener('click', ()=>{
    items = [];
    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto h1').innerHTML = "Total da Lista: R$0.00";
    
})
