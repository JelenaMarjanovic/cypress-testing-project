describe('Browser Actions', () => {
  it('should load correct url', () => {
    cy.visit('http://example.com/', { timeout: 10000 });
  });

  it('should check correct url', () => {
    cy.url().should('include', 'example.com');
  });
});
