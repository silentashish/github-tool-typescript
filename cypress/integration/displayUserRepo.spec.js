/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
describe('Display User Repo Screen', () => {
	var gitHubValidUserName = 'aryan21710';
    var gitHubRepoRedirectLink;
    var nameOfFirstRepo;

	before(() => {
		cy.visit('/');
		cy.get('.username').type(gitHubValidUserName);
		cy.get('button').contains('Submit').click({ force: true });
		cy.url().should('include', `/displayuserrepo/${gitHubValidUserName}`);
		cy.get('button').contains('Clear Repositories');
	});

	let noOfUserRepo;
	it('VALIDATE GET CALL TO GITHUB REPOS ENDPOINT', async () => {
		const response = await cy.request({
			method: 'GET',
			url: `https://api.github.com/users/${gitHubValidUserName}/repos`,
            headers: {'Access-Control-Request-Headers': "*"}
		});
		expect(response).to.have.property('status', 200);
		expect(response.body).to.not.be.null;
		noOfUserRepo = response.body.length;
        gitHubRepoRedirectLink = response.body[0].html_url.toLowerCase();
        nameOfFirstRepo=response.body[0].name.toLowerCase();
	});

	it('Validate The Grid Headers', () => {
		cy.get('.ag-header-cell-text').contains('Repository-Name');
		cy.get('.ag-header-cell-text').contains('Number of Stars');
		cy.get('.ag-header-cell-text').contains('Number of Forks');
	});

	it('Validate Number of Repositories', () => {
		cy.get('a#repositoryData').its('length').should('be.gt', 0);
    });
    
    it ('Validate Name of Repository',()=>{
        cy.get('a#repositoryData').first().contains(`${nameOfFirstRepo}`)
    })

    it ('Validation of Clear Repositories',()=>{
        cy.get('a#repositoryData').its('length').should('be.gt', 0);
        cy.get('button').click({ force: true });
        cy.get('a#repositoryData').should('not.exist');
    })

	it('Validate Redirection to GitHub Repo', () => {
        cy.reload();
		cy.get('a#repositoryData').first().click({ force: true });
		if (gitHubRepoRedirectLink) {
			cy.url().should('include', `${gitHubRepoRedirectLink}`);
		}
    });
    

});
