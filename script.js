document.getElementById("produtoForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nomeProd = document.getElementById("nome-prod").value;
    const qtd = document.getElementById("qtd").value;
    const categoria = document.getElementById("categorias").value;
    const disponibilidade = document.querySelector('input[name="disponibilidade"]:checked').value;
    const descricao = document.getElementById("descricao").value;

    
    const table = document.getElementById("produtoTable");
    const newline = table.insertRow();
    

    newline.insertCell(0).textContent = nomeProd;
    newline.insertCell(1).textContent = qtd;
    newline.insertCell(2).textContent = categoria;
    const celulaDisponibilidade = newline.insertCell(3);
    celulaDisponibilidade.textContent = disponibilidade;
    if (disponibilidade === "Em Estoque") { 
        celulaDisponibilidade.classList.add("disponivel");
    } else {
        celulaDisponibilidade.classList.add("esgotado");
    }
    newline.insertCell(4).textContent = descricao;

    
    const totalProdutos = document.getElementById("totalProdutos");
    totalProdutos.textContent = table.rows.length;

    document.getElementById("produtoForm").reset();
});