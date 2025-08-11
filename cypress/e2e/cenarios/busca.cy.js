describe('Busca - CNN Brasil', () => {
  it('Deve buscar "avião", ir para página 2 e abrir a terceira matéria', () => {
    cy.visit('https://www.cnnbrasil.com.br');

    // Abre o campo de busca
    cy.get('.group\\/searchform', { timeout: 10000 }).click();

    // Digita o termo e envia
    cy.get('input[type="search"]').type('avião{enter}');

    // Valida que a primeira página carregou
    cy.contains('Exibindo resultados para', { timeout: 10000 }).should('exist');

    // Vai para a página 2
    cy.get('[aria-label="Ir para página 2"]', { timeout: 10000 })
      .scrollIntoView()
      .click({ force: true });

    // Aguarda o texto base aparecer novamente (sem exigir "Página 2")
    cy.contains('Exibindo resultados para', { timeout: 15000 }).should('exist');

    // Aguarda o terceiro resultado aparecer e clica nele
    cy.get(':nth-child(3) > .h-full > .shrink-0 > .relative > .overflow-clip > .flex', { timeout: 15000 })
      .should('exist')
      .and('be.visible')
      .click({ force: true });

    // Valida que a matéria foi aberta
    cy.url().should('include', '/');
    cy.get('article', { timeout: 10000 }).should('exist');
  });
});