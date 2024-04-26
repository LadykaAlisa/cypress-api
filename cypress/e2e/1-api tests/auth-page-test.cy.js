/// <reference types="cypress" />

import userData from '../../fixtures/userData.json'

describe('Authorization and Profile Page Test', () => {
    it('should login as user and open Profile page with substituted data', () => {
        cy.intercept('GET', '**/profile', userData);
        cy.fixture('auth.json').then(user => {
        cy.visit ('https://qauto.forstudy.space/' , {
            auth: {
               username: 'guest',
               password: 'welcome2qauto' ,
           },   
        })
      cy.get('button.header_signin').click();
      cy.get("#signinEmail").type(user.email);
      cy.get("#signinPassword").type(user.password);
      cy.get(".btn-primary").contains("Login").click();
      cy.get('.-profile').click();
      //cy.get('.panel-page_heading > .btn').click();
  
      cy.url().should('include', '/profile');
  

  
      cy.get('.display-4').should('contain.text', 'Polar Bear');
  
      cy.get('.profile-info_text').should('contain.text', 'USA');
  
      cy.get('.profile-info_item').should('contain.text', '11.11.2011');
    });
  });
})