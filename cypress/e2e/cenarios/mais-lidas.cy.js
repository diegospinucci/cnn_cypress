describe('Mais Lidas - CNN Brasil', () => {
  it('Deve acessar a oitava matéria do carrossel e validar a página da matéria', () => {
    cy.visit('https://www.cnnbrasil.com.br');

    // Espera o carrossel aparecer
    cy.xpath('//*[@id="block2679630"]/div/section').should('exist');

    // Clica na seta direita 7 vezes para chegar na oitava matéria
    for (let i = 0; i < 7; i++) {
      cy.xpath('//*[@id="block2679630"]/div/section/nav/div/div/button[2]').click();
      cy.wait(500); // tempo para animação do carrossel
    }

    // Clica na oitava matéria (ajuste conforme estrutura real dos links)
    cy.xpath('//*[@id="block2679630"]/div/section/div/div/div[8]').click();

    // Valida se a página da matéria foi carregada
    cy.url().should('include', '/');
    cy.get('article').should('exist');
  });
});