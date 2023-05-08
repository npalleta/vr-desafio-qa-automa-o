/// <reference types='Cypress' />

import '../../support/commands';
import 'cypress-iframe';
import 'cypress-xpath';

const vrUrl = Cypress.env('baseUrl');

export default class VRChallengePage {
  /*
   * Realiza o acesso a plataforma da VR 
   */
  accessVRSite = () => {
    cy.visit(`${vrUrl}onde-aceita.htm`);
  };

  /*
   * Fecha o primeiro pop-up apresentado na tela
   */
  clickVRClosePopUpButton = () => {
    cy.get('[id*="_closePrivacyTerm"]').click();
  };

  /*
   * Abre a sessão - Onde usar o cartão 
   */
  clickWhereUseVRCardButton = () => {
    cy.get('.vr-button').contains('Onde usar o meu cartão').click();
  };

  /*
   * Verifica o link do Google Maps e se 
   * a imagem do mapa é apresentada na página
   */
  checkGoogleMapsLink = () => {
    cy.get('#map')
      .should('be.visible')
      .should('not.be.empty');

    cy.get('iframe[aria-hidden="true"]')
      .last()
      .parent()
      .scrollIntoView()
      .should('be.visible')
      .should('not.be.empty');

    cy.xpath('//*[contains(@title, "Google Maps")]')
      .invoke('attr', 'href')
      .then((href) => {
        cy.visit(href);
      });
    // .screenshot('Google Maps');
  };

  /*
   * Verifica se a imagem base é a mesma
   * do mapa apresentado na página
   * A tolerância de diferença não pode ser maior que 10% 
   */
  compareScreenshotsGoogleMaps = () => {
    cy.compareSnapshot('Google Maps', {
      capture: 'fullPage',
      errorThreshold: 0.1,
    });
  };
}
