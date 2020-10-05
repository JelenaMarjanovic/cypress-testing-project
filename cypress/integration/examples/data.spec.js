describe('Write / Read Data to / from JSON / Text File', () => {
  it('should write data into JSON', () => {
    cy.writeFile('log.json', { name: 'Mike', age: 25 });
  });
});
