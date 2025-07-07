describe('Login Test - Practice Test Automation', () => {
  it('logs in with valid credentials', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/');

    // Fill in username and password
    cy.get('#username').type('student');
    cy.get('#password').type('Password123');

    // Click login button
    cy.get('#submit').click();

    // Assert successful login by checking new page content
    cy.url().should('include', '/logged-in-successfully');
    cy.contains('Logged In Successfully').should('be.visible');
    cy.get('strong').should('contain.text', 'student');
  });
});