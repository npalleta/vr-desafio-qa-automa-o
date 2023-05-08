/// <reference types='Cypress' />

Cypress.config(`experimentalSessionSupport`, true);
Cypress.session.clearAllSavedSessions();

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

import VRChallengePage from '../pageobjects/VRChallengePage';

const vrChallengePage = new VRChallengePage();

Given('que eu acesso a página da VR - Onde Aceita', () => {
  vrChallengePage.accessVRSite();
});

When('eu clicar no botão Onde Usar', () => {
  vrChallengePage.clickVRClosePopUpButton();
  vrChallengePage.clickWhereUseVRCardButton();
});

Then('o mapa e link para o Google Maps deverão ser apresentados', () => {
  vrChallengePage.checkGoogleMapsLink();
});

Then('a imagem do mapa deverá ser a mesma imagem de base', () => {
  vrChallengePage.compareScreenshotsGoogleMaps();
});
