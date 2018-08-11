describe('Login to page', () => {
  it('visits MockCryptoTrader', () => {
    cy.visit('https://mockcryptotrader.herokuapp.com/')
    cy.url().should('eq', 'https://mockcryptotrader.herokuapp.com/')
  })

  it('navigates to Login page', () => {
    cy.get('[href="/login"]').click()
    cy.url().should('eq', 'https://mockcryptotrader.herokuapp.com/login')
  })

  it('enters username and password', () => {
    cy.get('[name="username"]')
      .type('kyle')
    cy.get('[name="password"]')
      .type('kyle')
  })

   it('logs into kyle', () => {
    cy.get('.ui button').click()
    cy.url().should('eq', 'https://mockcryptotrader.herokuapp.com/display')
   })

})
