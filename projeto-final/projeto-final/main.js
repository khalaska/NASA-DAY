function getAPOD() {
    const dateInput = document.getElementById('data').value;
    const apiKey = 'f5mjMNkNafB0Dw1z66dWjRpW7qP2wKnMJwpcFCdP'; // Substitua 'DEMO_KEY' pela sua chave de API da NASA

    // Monta a URL da API com a data selecionada
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateInput}`;

    // Faz a requisição à API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => displayResult(data))
      .catch(error => console.error('Erro ao obter a imagem:', error));
    }
    
    function displayResult(data) {
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `
      <div id="cardNasa">
        <h2>${data.title}</h2>
        <img id="nasaImg" src="${data.url}" alt="${data.title}">
        <div id="desc">
          <p id="descricao">${data.explanation}</p>
        </div>
      </div>  
    `;
  }