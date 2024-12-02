/// <reference types="cypress" />

describe('Test Web Saucedemo', () => {
  it('Test de Login y Logout', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.wait(2000)
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.screenshot('imagen')
    cy.wait(2000)
    cy.get('#login-button').click()
    cy.wait(2000)
    cy.get('#react-burger-menu-btn').click()
    cy.wait(2000)
    cy.get('#logout_sidebar_link').click()
  })
})