describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome to OWASP Juice Shop!").should("be.visible");
    cy.contains("a", "Me want it!").should("be.visible");
    cy.contains(
      "span",
      "This website uses fruit cookies to ensure you get the juiciest tracking experience. "
    ).should("be.visible");
    cy.contains("span", " OWASP Juice Shop ").should("be.visible");
    cy.contains("div", "All Products").should("be.visible");
  });
});
