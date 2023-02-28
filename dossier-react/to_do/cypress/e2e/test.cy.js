describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink')
    cy.contains('children').click();
    cy.url().should('contains','traversal')
  })

  it('visit localhost', () => {
    cy.visit('http://localhost:3000')
  })
})

describe('Ajouter une tâche', () => {
  it('Ajoute une tâche à la liste todo', () => {
    // Visite l'URL de l'application
    cy.visit('http://localhost:3000');

    // Sélectionne le champ de texte et saisit une nouvelle tâche
    cy.get('input[type="text"]').type('Nouvelle tâche');

    // Appuie sur la touche "Entrée" pour ajouter la tâche
    cy.get('input[type="text"]').type('{enter}');

    // Vérifie que la tâche a bien été ajoutée à la liste todo
    cy.get('.list-item')
      .should('have.length', 1)
      .and('contain', 'Nouvelle tâche');
  });

  it('moves task to done when checkbox is checked', () => {
   // Visite l'URL de l'application
   cy.visit('http://localhost:3000');

   // Sélectionne le champ de texte et saisit une nouvelle tâche
   cy.get('input[type="text"]').type('Nouvelle tâche');

   // Appuie sur la touche "Entrée" pour ajouter la tâche
   cy.get('input[type="text"]').type('{enter}');

   // Vérifie que la tâche a bien été ajoutée à la liste todo
   cy.get('.list-item')
     .should('have.length', 1)
     .and('contain', 'Nouvelle tâche');
    
    // Coche la case de la tâche
    cy.get('input[type="checkbox"]').check();
    
    // Vérifie que la tâche a été déplacée dans le tableau "done"
    cy.get('.list-item')
      .should('have.length', 1)
      .and('contain', 'Nouvelle tâche');
  });
  

});
