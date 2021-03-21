export const getOnePageRepositories = () => {
    cy.intercept(
        {
            method: 'POST',
            url: 'https://api.github.com/graphql',
        },
        {fixture: '../fixtures/Repositories/repositories_without_pagination.json'}
    );
}

export const getMultiplePagesRepositories = () => {
    cy.intercept(
        {
            method: 'POST',
            url: 'https://api.github.com/graphql',
        },
        {fixture: '../fixtures/Repositories/repositories_with_pagination.json'}
    )
}

export const getLastPageOfRepositories = () => {
    cy.intercept(
        {
            method: 'POST',
            url: 'https://api.github.com/graphql',
        },
        {fixture: '../fixtures/Repositories/last_page_of_repositories.json'}
    )
}

