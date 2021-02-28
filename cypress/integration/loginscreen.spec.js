/* eslint-disable no-undef */
describe('LoginScreen', () => {
    const homeUrl='http://localhost:3000/';
	beforeEach(() => {
        cy.visit('/')
        cy.viewport('macbook-15');
	});

	it('Validation of Input tag to Enter Username', () => {
        cy.get('.username').should('have.focus');
        cy.focused().should('have.class', 'username');
        const usernameInput = 'Dummy Input For testing'.split(' ').join('');
        cy.get('.username').type(usernameInput).should('have.value', usernameInput);
        cy.get('button').should('not.be.disabled');

	});

	it('Validation of Submit button on the login screen', () => {
        cy.get('button').contains('Submit');
        cy.get('button').should('be.disabled');
	});

	it('Login Functionality using Invalid Username', () => {
		const invalidUser = '@';
		cy.get('.username').type(invalidUser);
		cy.get('button').contains('Submit').click({ force: true });
		cy.url().should('eq', homeUrl);
	});

	it('Login Functionality using Valid Username', () => {
		const validUser = 'aryan21710';
		cy.get('.username').type(validUser);
		cy.get('button').contains('Submit').click({ force: true });
		cy.url().should('include', `/displayuserrepo/${validUser}`);
		cy.get('button').contains('Clear Repositories');
	});
});
