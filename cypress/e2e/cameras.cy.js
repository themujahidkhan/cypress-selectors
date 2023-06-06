describe("Selector Page ID Example", () => {
  it("selects the element with the id", () => {
    cy.visit("https://ecommerce-playground.lambdatest.io/");
    cy.get("#main-navigation");

    cy.get("#entry_217833 > a > span > svg").click();

    cy.get("#mz-component-1626147655");

    cy.get("#widget-navbar-217841 > ul > li:nth-child(2) > a > div.info > span")
      .contains("Cameras")
      .click();
    cy.screenshot();
  });
});
