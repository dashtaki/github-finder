import {
    getErrorForSearchUser,
    getUsersWithDelay,
    getUserWhileUSerIsTyping,
    noUserResponse
} from '../../helpers/searchUser.helper';

describe('SearchUser', () => {
    it('should be set disabled button when user not selected yet', () => {
        cy.visit('/search')

        cy.get('button[type=submit]')
            .should('be.disabled')
    });

    it('should show user while user searching for', () => {
        getUserWhileUSerIsTyping();

        cy.get('ul li')
            .should('have.length', 8)
    });

    it('should show user avatar', () => {
        const expectedImg = 'https://avatars.githubusercontent.com/u/2056111?s=40&u=85a705baf83e6d0eeccb32c8b904642568a8d663&v=4';
        getUserWhileUSerIsTyping();

        cy.get('ul li')
            .first()
            .get('img')
            .should('have.attr', 'src', expectedImg);
    });

    it('should show user name', () => {
        const expectedName = 'reid';
        getUserWhileUSerIsTyping();

        cy.get('ul li')
            .first()
            .get('.user-detail__name')
            .should('contain', expectedName);
    });

    it('should show "No Name" when user does not have name', () => {
        const expectedName = 'No Name';
        getUserWhileUSerIsTyping();

        cy.get('ul li')
            .eq(2)
            .get('.user-detail__name')
            .should('contain', expectedName);
    });

    it('should show user followers count', () => {
        const expectedName = 'Followers: 63';
        getUserWhileUSerIsTyping();

        cy.get('ul li')
            .first()
            .get('.user-detail__wrapper small:nth-child(2)')
            .should('contain', expectedName);
    });

    it('should show user following count', () => {
        const expectedName = 'Following: 14';
        getUserWhileUSerIsTyping();

        cy.get('ul li')
            .first()
            .get('.user-detail__wrapper small:nth-child(3)')
            .should('contain', expectedName);
    });

    it('should enable search icon on user click', () => {
        getUserWhileUSerIsTyping();
        cy.get('ul li')
            .first()
            .click();

        cy.get('button[type=submit]')
            .should('not.be.disabled')
    });

    it('should put name in input on user click', () => {
        getUserWhileUSerIsTyping();
        cy.get('ul li')
            .first()
            .click();

        cy.get('#search-input')
            .should('have.value', 'reid')
    });

    it('should show message when API error happened', () => {
        getErrorForSearchUser();
        cy.get('#search-input')
            .type('a');

        cy.get('.api-error__wrapper')
            .should('have.length', 1);
    });


    it('should show message when there is not any user', () => {
        noUserResponse()
        cy.get('#search-input')
            .type('a');

        cy.get('.user-not-found__text')
            .should('contain', 'No Users found!');
    });

    it('should route to repositories page', () => {
        getUserWhileUSerIsTyping();
        cy.get('ul li:first-child').click();
        cy.get('button[type=submit]').click();

        cy.location()
            .should(location => expect(location.pathname).to.eq('/repositories/sad'));
    });

    it('should show spinner while loading', () => {
        getUsersWithDelay();

        cy.get('.spinner')
            .should('have.length', 1);
    });
})
