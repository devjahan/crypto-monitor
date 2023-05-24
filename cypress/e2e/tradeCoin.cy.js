describe('tradeCoin test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/tradeCoin');
        cy.wait(2000);
      });

    it('select coins to view graph', () => {
        cy.get('[id="you-pay"]').select('BTC');
        cy.wait(1000);

        cy.get('[id="you-receive"]').select('ETH');
        cy.wait(500);

        cy.scrollTo('top');
        cy.wait(2000);
        
        cy.contains('Go to Order Book').click();
    });
});