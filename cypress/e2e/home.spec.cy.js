describe('home.spec.cy.js', () => {
  it('should visit', () => {
    cy.visit('/');
  });
  it('should show the side menu', () => {
    cy.visit('/');
    cy.get('[data-testid="Side Navigation Menu"]').should('be.visible');
  });
  it('should go to /cabinet', () => {
    cy.visit('/');
    cy.get('[data-testid="Cabinet button"]').should('be.visible').click();
    cy.get('[data-testid="Cabinet Title"]').should('be.visible');
  });
});
