describe("Selector Page ID Example", () => {
  it("selects the element with the id", () => {
    cy.visit("https://ecommerce-playground.lambdatest.io/");
    cy.get("#entry_217841");
  });
});
