describe('Google Homepage Test', () => {
  it('should load Google homepage and display the logo', () => {
    cy.visit('https://www.google.com');
    cy.get('img[alt="Google"]').should('be.visible');
  });
});