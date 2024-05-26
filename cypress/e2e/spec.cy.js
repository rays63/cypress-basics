it('my first test',()=>{
    cy.visit('/')
    cy.get('[data-cy=board-item')
        .eq(0)
})