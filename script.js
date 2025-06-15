function responderQuestao(textoAlvo) {
  const alternativas = document.querySelectorAll('.alternativa, .radio, label');
  alternativas.forEach(alt => {
    if (alt.innerText && alt.innerText.includes(textoAlvo)) {
      const input = alt.querySelector('input');
      if (input) input.click();
    }
  });
}

// Exemplo:
responderQuestao("Ondas mecânicas.");
responderQuestao("Ondas transversais.");
responderQuestao("Errado"); // Questão 2A
responderQuestao("Certo");  // Questão 2B
