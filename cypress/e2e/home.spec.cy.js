describe('home.spec.cy.js', () => {
  it('should visit', () => {
    cy.visit('/')
  })
  it('should show the side menu', () => {
    cy.get('[data-testid="Side Navigation Menu"]').should('be.visible')
  })
})
