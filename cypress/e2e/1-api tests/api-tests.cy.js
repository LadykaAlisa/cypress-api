/// <reference types="cypress" />


describe('API Tests', () => {
  it('should return 200 status code for GET /posts', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts').then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('should return 200 status code for GET /users', () => {
    cy.request('https://jsonplaceholder.typicode.com/users').then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('should return a specific user by ID', () => {
    cy.request('https://jsonplaceholder.typicode.com/users/1').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(1);
    });
  });

  it('should return the correct number of posts', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.length).to.eq(100); 
    });
  });

  it('should return 200 status code for DELETE /posts/{id}', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://jsonplaceholder.typicode.com/posts/1', 
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
