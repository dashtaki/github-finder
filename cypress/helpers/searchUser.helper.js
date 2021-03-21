export const getUserWhileUSerIsTyping = () => {
    cy.intercept(
        {
            method: 'POST',
            url: 'https://api.github.com/graphql',
        },
        {fixture: '../fixtures/SearchUser/users.json'}
    );

    cy.get('#search-input').type('s');
}

export const noUserResponse = () => cy.intercept(
    {
        method: 'POST',
        url: 'https://api.github.com/graphql',
    },
    {fixture: '../fixtures/SearchUser/no_user.json'}
);

export const getUsersWithDelay = () => {
    cy.intercept(
        {
            method: 'POST',
            url: 'https://api.github.com/graphql',
        },
        {
            delay: 5000,
            fixture: '../fixtures/SearchUser/users.json'
        }
    );
}

export const getErrorForSearchUser = () => {
    cy.intercept(
        {
            method: 'POST',
            url: 'https://api.github.com/graphql',
        },
        {forceNetworkError: true}
    );
}
