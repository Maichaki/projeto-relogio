function getHorarioBrasilia() {
    const dataAtual = new Date();
    dataAtual.setUTCHours(dataAtual.getUTCHours() - 0);
  
    const options = { 
      timeZone: 'America/Sao_Paulo', 
      hour: 'numeric', 
      minute: 'numeric', 
      second: 'numeric' 
    };
  
    const horarioBrasilia = dataAtual.toLocaleTimeString('pt-BR', options);
  
    // Atualizar o conteúdo da <p> com id "horarioBrasilia"
    document.getElementById('horarioBrasilia').innerText = horarioBrasilia;

      // Definir a imagem com base no horário

      const imagemDoDia = document.getElementById('imagemDoDia');
      if (horarioBrasilia >= 6 && horarioBrasilia < 12) {
        imagemDoDia.src = 'manha.png?' + new Date().getTime();
      } else if (horarioBrasilia >= 12 && horarioBrasilia < 18) {
        imagemDoDia.src = 'manha.png?' + new Date().getTime();
      } else {
        imagemDoDia.src = 'manha.png?' + new Date().getTime();
      }
    }
  
getHorarioBrasilia();
setInterval(getHorarioBrasilia, 1000);