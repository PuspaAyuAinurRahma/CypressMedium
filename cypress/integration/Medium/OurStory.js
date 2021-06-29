context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://medium.com/')
    });

    it('Our Story Page', () => {
        cy.get('#top-nav-our-story-cta-desktop > .bz > .ca > .bd')
            .click();

        //Cek if the header fixed or not
        cy.get('.alternate-nav-container')
            .scrollIntoView()
            .should('be.visible');

        //Section 1
        cy.get('._01-hero')
            .should('be.visible');
        cy.get('.hero-wrap')
            .contains('Every idea needs a');
        cy.get('.medium-inline-logo')
            .and('have.attr', 'src');
        cy.get('.medium-logo-in-hero > .header-1')
            .contains('.');

        //Section 2
        cy.get('[data-w-id="ffdae69f-1d2e-bf69-8b33-c70757894798"] > .bifold')
            .should('be.visible');
        cy.get('.intro-header')
            .should('be.visible');

        //Section 3
        cy.get('._01-tri-preview')
            .should('be.visible');
        cy.get('._01-tri-preview > .middle-heading-wrap > .header-1')
            .contains('A living network of curious minds.');
        cy.get('._01-tri-preview > .middle-heading-wrap > .paragraph-wrap > .paragraph')
            .should('be.visible');

        cy.get('[href="https://medium.com/the-atlantic"]')
            .should('be.visible');
        cy.get('[href="https://medium.com/the-atlantic"] > .tri-col-logo > img')
            .should('be.visible');
        cy.get('[href="https://medium.com/the-atlantic"] > .tri-col-item-name > .blah-2')
            .contains('The Atlantic');

        cy.get('[href="https://devonprice.medium.com/"]')
            .should('be.visible');
        cy.get('[href="https://devonprice.medium.com/"] > .tri-col-logo > img')
            .should('be.visible');
        cy.get('[href="https://devonprice.medium.com/"] > .tri-col-item-name > .blah-2')
            .contains('Devon Price');

        cy.get('[href="https://gen.medium.com"]')
            .should('be.visible');
        cy.get('[href="https://gen.medium.com"] > .tri-col-logo > img')
            .should('be.visible');
        cy.get('[href="https://gen.medium.com"] > .tri-col-item-name > .blah-2')
            .contains('GEN');

        //Section 4
        cy.get('.fixed-height > .bifold')
            .should('be.visible');
        cy.get('.header-wrap-1 > .header-1-alt1')
            .contains('170 million readers and growing.');

        //Section 5
        cy.get('._01-1-col.inv')
            .should('be.visible');
        cy.get('._01-1-col.inv > .middle-heading-wrap > .header-1')
            .contains('Create the space for your thinking to take off.');
        cy.get('._01-1-col.inv > .middle-heading-wrap > .paragraph-wrap > .paragraph')
            .should('be.visible');
        cy.get('._01-1-col.inv > .middle-heading-wrap > .button-style > .button')
            .should('be.visible');
        cy.get('._01-1-col.inv > .middle-heading-wrap > .button-style > .button > .button-text-2')
            .contains('Write on Medium');

        //Section 6
        cy.get('.bot-line')
            .should('be.visible');
        cy.get('.bot-line > .middle-heading-wrap > .header-1')
            .contains('Get more with membership.');
        cy.get('.bot-line > .middle-heading-wrap > .paragraph-wrap > .paragraph')
            .should('be.visible');
        cy.get('.bot-line > .middle-heading-wrap > .button-style > .button')
            .should('be.visible');
        cy.get('.bot-line > .middle-heading-wrap > .button-style > .button > .button-text-2')
            .contains('See membership options');
    });
});
