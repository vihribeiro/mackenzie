// Função para consumir a API e exibir os dados
async function fetchRandomUser() {
    try {
        // Fazendo a requisição para a API com 1 usuário
        const response = await fetch('https://randomuser.me/api/?results=1');
        const data = await response.json();
        const user = data.results[0];

        // Selecionando o container do card
        const userCard = document.getElementById('user-card');

        // Montando o HTML do card com as informações da API
    
        ;

    } catch (error) {
        console.error("Erro ao buscar os dados da API", error);
    }
}

// Chamar a função para buscar e exibir o usuário
fetchRandomUser();