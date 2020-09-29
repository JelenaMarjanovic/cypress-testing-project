describe('Browser Actions', () => {
  it('should load books website', () => {
    cy.visit('http://books.toscrape.com/index.html', { timeout: 10000 });

    cy.url().should('include', 'index.html');
  });

  it('should click on Travel category', () => {
    cy.get('a').contains('Travel').click();

    // Verify we landed on the right page
    cy.get('h1').contains('Travel');
  });

  it('should display correct number of books', () => {
    cy.get('.product_pod').its('length').should('eq', 11);
  });
});
