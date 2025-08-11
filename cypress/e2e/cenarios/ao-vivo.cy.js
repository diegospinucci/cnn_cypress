describe('Ao Vivo - Esportes - Shorts', () => {
  it('Deve abrir o segundo vídeo da seção Shorts e validar o conteúdo exibido', () => {
    cy.visit('https://www.cnnbrasil.com.br');

    // Clica no botão "Ao Vivo"
    cy.get('body > header > div > div > ul > li:nth-child(1) > a', { timeout: 10000 })
      .should('exist')
      .and('be.visible')
      .click({ force: true });

    cy.location('pathname', { timeout: 10000 }).should('include', '/ao-vivo');

    // Clica na seção "Esportes"
    cy.get('a[href="/ao-vivo/cnn-esportes"]', { timeout: 10000 })
      .should('exist')
      .and('be.visible')
      .click({ force: true });

    cy.location('pathname', { timeout: 10000 }).should('include', '/ao-vivo/cnn-esportes');

    // Aguarda a seção "Shorts" aparecer
    cy.contains('Shorts', { timeout: 10000 })
      .scrollIntoView()
      .should('exist');

    // Clica diretamente no segundo vídeo do carrossel
    cy.get(':nth-child(6) > .mx-auto > :nth-child(1) > section.relative > .carouselWrapBlocks > .touch-auto > [data-index="1"] > .h-auto > .relative > .h-fit > .overflow-clip > .flex', { timeout: 10000 })
      .should('exist')
      .and('be.visible')
      .click({ force: true });

    // Aguarda possível redirecionamento ou atualização de conteúdo
    cy.wait(3000);

    // Valida que algum conteúdo relacionado ao vídeo foi exibido
    // Aqui você pode usar um seletor mais específico se souber o título ou estrutura
    cy.get('h1, h2, h3, .video-title, .player', { timeout: 10000 })
      .should('exist')
      .and('be.visible');
  });
});