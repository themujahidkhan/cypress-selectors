describe("CSS Selector example", () => {
  it("uses all the css selectors and fills the register form", () => {
    cy.visit(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/register"
    );

    // ID selector
    cy.get("#input-firstname").type("John");
    cy.get("#input-lastname").type("Doe");

    // attribute selector
    cy.get('input[type="email"]').type("john.doe@example.com");
    cy.get('input[type="tel"]').type("0123456789");
    cy.get('[name="password"]').type("password123");
    cy.get('[name="confirm"]').type("password123");

    // combinators selector
    cy.get('.custom-checkbox input[name="agree"]').check({ force: true });
    cy.get('.custom-radio input[type="radio"][value="1"]').click({
      multiple: true,
      force: true,
    });

    // Class selector
    cy.get(".btn-primary").click({ multiple: true, force: true });
  });
});
