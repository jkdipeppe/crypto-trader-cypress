describe('/login', () => {
  beforeEach(() => {
    cy.visit('https://mockcryptotrader.herokuapp.com/login')
  })

  it('greets with Sign in', () => {
    cy.contains('h2', 'Welcome to Crypto Trader')
    cy.contains('p', 'Please log in or create an account')
  })

  it('links to create account', () => {
    cy.contains('Create Account')
      .should('have.attr', 'href', '/CreateAccount')
  })

  it('requires email', () => {
    cy.get('form').contains('Login').click()
    cy.contains('Incorrect Username or Password')
  })

  it('requires password', () => {
    cy.get('[name="username"]').type('kyle{enter}')
    cy.contains('Incorrect Username or Password')
  })

  it('requires valid username and password', () => {

  })

  it('navigates to /display on successful login', () => {
    cy.get('[name="username"]').type('kyle')
    cy.get('[name="password"]').type('kyle{enter}')
    cy.url().should('eq', 'https://mockcryptotrader.herokuapp.com/display')
  })


})
