describe("homepage selectors", () => {
  it("checks hero content", () => {
    // It will visit the homepage
    cy.visit("/");
    cy.get(".hero-title");
    cy.get(".hero-desc");
    cy.get("#getStarted").click();
    
  });
});
