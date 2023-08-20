


 document.addEventListener("DOMContentLoaded", function() {
    fetch('carros.json')
        .then(response => response.json())
        .then(data => {
            let output = '';
            data.carros.forEach(carro => {
                output += `
                <div class="carro-item">
                    <h2>${carro.nome}</h2>
                    <strong>${carro.preco}</strong>
                    <p>${carro.peso}</p>
                    <p>${carro.potencia}</p>
                    <p>${carro.criacao}</p>
                    <p>${carro.consumo}</p>
                    <img src="${carro.imagem}" alt="${carro.nome}">
                </div>
                `;
                
            });
            document.getElementById('lista-carros').innerHTML = output;
        })
        .catch(error => console.error('Erro ao buscar os carros:', error));
 
 });





