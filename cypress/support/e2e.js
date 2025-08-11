import './commands'
require('cypress-xpath');

Cypress.on('uncaught:exception', (err, runnable) => {
  // Retorna false para impedir que o Cypress falhe o teste
  return false;
});

require('@shelex/cypress-allure-plugin');