describe("Selector Page ID Example", () => {
  it("selects the element with the id", () => {
    cy.visit("/selectors.html");
    cy.get("#exampleID");
  });
});

describe("Selector page Class Example", () => {
  it("selects the element with the class name", () => {
    cy.visit("/selectors.html");
    cy.get(".exampleClass");
  });
});

describe("Selector page Attribute Example", () => {
  it("selects the element with the attribute", () => {
    cy.visit("/selectors.html");
    cy.get("[data-value='dummyText']");
  });
});

describe("Selector page Tagname example", () => {
  it("selects the element with tag name", () => {
    cy.visit("/selectors.html");
    cy.get("div > p");
  });
});
