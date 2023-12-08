describe('Multiple Presets', () => {

const presents = ['macbook-15', 'samsung-note9', 'ipad-mini', 'iphone-xr'];

  it('Check URL', () => {

    presents.forEach((device) =>{
      cy.viewport(device)
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')

    })
  })
})