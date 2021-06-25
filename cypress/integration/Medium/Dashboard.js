context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://medium.com/')
    });

    it('Header', () => {
        cy.get('.ah > .as').should('be.visible');
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
});
