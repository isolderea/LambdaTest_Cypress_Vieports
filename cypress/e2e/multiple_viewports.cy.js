describe('Multiple Viewports', () => {

  const viewports = [
  
{ width: 1280, height: 720 }, // Desktop
{ width: 320, height: 480 }, // Mobile portrait
{ width: 768, height: 1024 },// Tablet
    
  ]


  it('Check URL', () => {

    viewports.forEach((views) =>{
      cy.viewport(views.width, views.height)
      cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')

    })

  })
})