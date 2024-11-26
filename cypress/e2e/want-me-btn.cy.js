describe('Want me button functionality', () => {
  it('Click on want-me btn', () => {
    cy.visit('/');
    cy.contains('a', 'Me want it!').click();
  });
});
