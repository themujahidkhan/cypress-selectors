describe("CSS Selector example", () => {
  it("uses all the css selectors and tests the blog page and blog posts", () => {
    cy.visit(
      "https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home"
    );

    // Wait for the page to load
    cy.document()
      .should("have.property", "readyState")
      .and("equal", "complete");

    // ID selector
    // Scroll into view of blog posts
    cy.get("#entry_210959").scrollIntoView().wait(1000);
    // Clicks on the first blog post
    cy.get("#mz-article-tab-76210960-0").click();
    // Once blog post is opened, It scrolls down and clicks on Read more text button
    cy.timeout(500);
    cy.get("#entry_210907 > div > div > a").click();

    cy.get("#form-comment").scrollIntoView().wait(1000);
    cy.get("#input-name").type("Random Name");
    cy.get("input[type=email]").type("randomemaill@gmail.com");
    cy.get("#input-comment").type(
      "Testing this comment, what you guys are doing here?"
    );
    cy.get("#button-comment").click();
    cy.wait(1000);
    cy.get(".alert-success").scrollIntoView();
  });
});
