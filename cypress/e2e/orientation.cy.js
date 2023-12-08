describe('Orientation', () => {

  it('Check orientation', () => {
    
    cy.viewport('samsung-note9', 'landscape')
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
    cy.viewport('samsung-note9', 'portrait')
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')

  })
})