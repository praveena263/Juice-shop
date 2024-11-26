describe("Want me button functionality", () => {
  it("Click on want-me btn", () => {
    cy.visit("/");
    cy.contains("a", "Me want it!").click();
    cy.contains("h1", "Welcome to OWASP Juice Shop!").should("be.visible");
    cy.contains("Dismiss").click();
  });
});
