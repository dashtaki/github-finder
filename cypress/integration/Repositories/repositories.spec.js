import {
    getMultiplePagesRepositories,
    getOnePageRepositories
} from '../../helpers/repositories.helper';

describe('Repositories', () => {
    it('should show all repositories', () => {
        getOnePageRepositories();
        cy.visit('/repositories/sad');

        cy.get('ul li')
            .should('have.length', 6);
    });

    it('should show back button', () => {
        cy.get('.back-button')
            .should('have.length', 1);
    });

    it('should show chevron right icon for back button', () => {
        cy.get('.back-button .svg-inline--fa')
            .should('have.length', 1);
    });

    it('should go back to search page on back button click', () => {
        cy.get('.back-button').click()

        cy.location()
            .should(location => expect(location.pathname).to.eq('/search'));
    });

    it('should show repository name', () => {
        getOnePageRepositories()
        cy.visit('/repositories/sad');

        cy.get('ul li')
            .first()
            .should('contain', 'IsResponisve');
    });

    it('should user icon for repository name', () => {
        cy.get('ul li')
            .get('.repo__detail .svg-inline--fa')
            .should('have.class', 'fa-user');
    });

    it('should show repository forks count', () => {
        cy.get('ul li')
            .get('.repo__detail')
            .eq(1)
            .should('contain', '20');
    });

    it('should show forks icon', () => {
        cy.get('ul li')
            .get('.repo__detail')
            .eq(1)
            .get('.svg-inline--fa')
            .should('have.class', 'fa-code-branch')
    });

    it('should show repository stars', () => {
        cy.get('ul li')
            .get('.repo__detail')
            .eq(2)
            .should('contain', '10');
    });

    it('should show start icon for starts', () => {
        cy.get('ul li')
            .get('.repo__detail')
            .eq(2)
            .get('.svg-inline--fa')
            .should('have.class', 'fa-star')
    });

    it('should show link to the repository', () => {
        cy.get('ul li')
            .get('.repo__detail a')
            .should('have.attr', 'href', 'https://github.com/dashtaki/IsResponisve');
    });

    it('should show link icon for the repository link', () => {
        cy.get('ul li')
            .get('.repo__detail')
            .eq(3)
            .get('a .svg-inline--fa')
            .should('have.class', 'fa-external-link-square-alt')
    });

    it('should not show paginator when repositories count is less that 10', () => {
        cy.get('.pagination')
            .should('have.length', 0)
    });

    it('should previous button paginator as disabled when user has more than 10 repositories', () => {
        getMultiplePagesRepositories();
        cy.visit('/repositories/sad');

        cy.get('.pagination button')
            .first()
            .should('be.disabled')
    });

    it('should show chevron left icon for paginator previous icon', () => {
        cy.get('.pagination button')
            .first()
            .get('.svg-inline--fa')
            .should('have.class', 'fa-chevron-left')
    });

    it('should next button paginator as enabled when user has more than 10 repositories', () => {
        cy.get('.pagination button')
            .eq(1)
            .should('not.be.disabled')
    });

    it('should show chevron right icon for paginator next icon', () => {
        cy.get('.pagination button')
            .eq(1)
            .get('.svg-inline--fa')
            .should('have.class', 'fa-chevron-right')
    });

    it('should get next data on next button paginator click', () => {
        cy.intercept(
            {
                method: 'POST',
                url: 'https://api.github.com/graphql',
            },
            {fixture: '../fixtures/Repositories/second_page_of_repositories.json'}
        ).as('getMultiplePageRepositories');

        cy.get('.pagination button')
            .eq(1)
            .click();

        cy.wait('@getMultiplePageRepositories')
            .should((req) => {
                const {request} = req;
                expect(request.method).to.equal('POST')
                expect(request.body.operationName).to.equal('userRepos')
                expect(request.body.variables.after).to.equal('Y3Vyc29yOnYyOpHOACB_Sw==')
                expect(request.body.variables.first).to.equal(10)
                expect(request.body.variables.username).to.equal('sad')
                expect(request.url).to.equal('https://api.github.com/graphql')
            })
    });

    it('should enabled previous button paginator on showing next data', () => {
        cy.get('.pagination button')
            .eq(1)
            .should('not.be.disabled')
    });

    it('should disabled next button paginator when there is not any data anymore', () => {
        cy.intercept(
            {
                method: 'POST',
                url: 'https://api.github.com/graphql',
            },
            {fixture: '../fixtures/Repositories/last_page_of_repositories.json'}
        )

        cy.visit('/repositories/sad');
    });

    it('should show previous data on previous data paginator', () => {
        cy.get('.pagination button')
            .eq(1)
            .should('be.disabled')
    });
})
