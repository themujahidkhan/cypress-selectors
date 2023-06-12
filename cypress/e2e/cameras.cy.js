describe("ID Selector example", () => {
  it("selects the element with the id", () => {
    cy.visit("https://ecommerce-playground.lambdatest.io/");
    
    cy.get("#main-navigation");

    cy.get("#entry_217833 > a > span > svg").click();

    cy.get("#mz-component-1626147655");

    cy.get("#widget-navbar-217841 > ul > li:nth-child(2) > a > div.info > span")
      .contains("Cameras")
      .click();

    /* Only for mode: Set timeout to 1 second, blocking wait should be avoided */ 
    cy.timeout(1000);

    /* Ensure that all the lazy loaded images are loaded completely */
    cy.get('.lazy-load').as('lazyLoadedImages');

    cy.get('@lazyLoadedImages').each(($image) => {
      /* Wait for the property to become complete i.e. image is present in the DOM */
      cy.wrap($image).should('have.prop', 'complete', true);
    });


    /* Wait for the page load to complete, just a precautionary measure
    since we are dealing with dynamic elements
    */
    cy.document().should('have.property', 'readyState').and('equal', 'complete');

    /* Scroll into the view of the first element & capture its screenshot */
    cy.get('#mz-product-grid-image-28-212408').scrollIntoView().wait(1000);
    cy.get('#mz-product-grid-image-28-212408').screenshot({ capture: 'viewport' });

    cy.timeout(1000);

    /* Scroll into the view of the last element & capture its screenshot */
    cy.get('#mz-product-grid-image-44-212408').scrollIntoView().wait(1000);
    cy.get('#mz-product-grid-image-44-212408').screenshot({ capture: 'viewport' });
    
    /* Only for demo: Wait for 1 second & capture screenshot of the entire page */
    cy.timeout(1000);

    cy.screenshot('playground_camera_page');
  });
});