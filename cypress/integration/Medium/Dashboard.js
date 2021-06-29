context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://medium.com/')
    });

    it('Header', () => {
        //Cek if the header fixed or not
        cy.get('.ah > .as')
            .scrollIntoView()
            .should('be.visible');
        cy.get('.bs').should('be.visible');
        cy.get('#top-nav-our-story-cta-desktop > .bz > .ca > .bd').contains('Our story')
            .and('have.attr', 'href');
        cy.get('#top-nav-membership-cta-desktop > .bz > .ca > .bd').contains('Membership')
            .and('have.attr', 'href');
        cy.get('#top-nav-write-cta-desktop > .bz > .ca > .bd').contains('Write')
            .and('have.attr', 'href');
        cy.get('.ca > span > .bd').contains('Sign In')
            .and('have.attr', 'href');
        cy.get('span > .bd > .ca').should('be.visible');

        cy.get('.dc > .as').should('be.visible');
        cy.get('#header-headline-mobile > .dv')
            .contains('Medium is a place to write, read, and connect');
        cy.get('.eb > .ca > #header-subhead-copy')
            .contains('It\'s easy and free to post your thinking on any topic and connect with millions of readers.');
        cy.get('.cx > span > .ca').should('be.visible');
    });
    it('Body', () => {
        cy.get('.ht > div.af > .ca').contains('Trending on Medium');

        cy.get(':nth-child(1) > :nth-child(1) > .gw')
            .should('be.visible');
        cy.get(':nth-child(1) > :nth-child(1) > .gw > .gx > .ca')
            .contains('1');

        cy.get(':nth-child(2) > :nth-child(1) > .gw')
            .should('be.visible');
        cy.get(':nth-child(2) > :nth-child(1) > .gw > .gx > .ca')
            .contains('2');

        cy.get(':nth-child(3) > :nth-child(1) > .gw')
            .should('be.visible');
        cy.get(':nth-child(3) > :nth-child(1) > .gw > .gx > .ca')
            .contains('3');

        cy.get(':nth-child(4) > :nth-child(1) > .gw')
            .should('be.visible');
        cy.get(':nth-child(4) > :nth-child(1) > .gw > .gx > .ca')
            .contains('4');

        cy.get(':nth-child(5) > :nth-child(1) > .gw')
            .should('be.visible');
        cy.get(':nth-child(5) > :nth-child(1) > .gw > .gx > .ca')
            .contains('5');

        cy.get(':nth-child(6) > :nth-child(1) > .gw')
            .should('be.visible');
        cy.get(':nth-child(6) > :nth-child(1) > .gw > .gx > .ca')
            .contains('6');

        cy.get('.r > :nth-child(1) > :nth-child(1)')
            .should('be.visible');
        cy.get('.x > .ho')
            .should('be.visible');
    });
});
