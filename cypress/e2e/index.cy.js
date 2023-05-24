describe('index test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.wait(1000);
  });

  it('scrolls through the crypto list', () => {
    cy.get('div[data-testid="crypto-list"]').scrollIntoView();
    cy.wait(2000);

    for (let i = 0; i < 4; i++) {
      cy.get('[data-testid="Next"]').click();
      cy.wait(1000);
    }

    cy.get('div[data-testid="crypto-list"]').scrollIntoView();
    cy.wait(1000);

    cy.scrollTo('top');
    cy.wait(1000);

    cy.contains('Start Trading').click();
  });
});
