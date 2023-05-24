describe('orderBook test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/orderBook');
        cy.wait(2000);
      });

    it('view page', () => {
        cy.scrollTo('bottom');
        cy.wait(2000);
        cy.scrollTo('top');
        cy.wait(2000);
        
        cy.contains('Home').click();
    });
});