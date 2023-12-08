describe('Single Viewport', () => {
  it('Single test', () => {
    cy.viewport(640,480)
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
    cy.viewport('iphone-8')
  })
})