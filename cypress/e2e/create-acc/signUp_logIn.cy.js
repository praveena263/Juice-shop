describe("Signup Test", () => {
  it.skip("Test valid signup", () => {
    cy.launch_app();
    cy.contains("button", "menu").should("be.visible").click();
    cy.contains("a", " Login ").click({ force: true }, { timeout: 100000 });
    cy.contains("a", "Not yet a customer?").should("be.visible");
    cy.contains("span", " Account ").click();
    cy.contains("button", " Login ").click({ timeout: 100000 });
    cy.contains("a", "Not yet a customer?")
      .should("be.visible")
      .click({ force: true });
    cy.get("#emailControl").type("veanaamar25@gmail.com");
    cy.get("#passwordControl").type("123456ABC");
    cy.get("#repeatPasswordControl").type("123456ABC");
    cy.get(".mat-select-placeholder").click();
    cy.get("#mat-option-11 > .mat-option-text").click();
    cy.get("#securityAnswerControl").type(answer);
    cy.get("#registerButton > .mat-button-wrapper").click({ force: true });
    //cy.contains("button",' Register ').click({force:true})
    cy.contains(
      "Registration completed successfully. You can now log in."
    ).should("be.visible");
  });
  it("Test valid signup", () => {
    cy.launch_app();
    cy.contains("span", " Account ").click();
    cy.contains("button", " Login ").click({ timeout: 100000 });
    cy.contains("a", "Not yet a customer?").should("be.visible");
  });
  it('Clicking on hidden "Login" link', () => {
    cy.launch_app();
    cy.contains("button", "menu").should("be.visible").click();
    cy.contains("a", " Login ").click({ force: true }, { timeout: 100000 });
    cy.contains("a", "Not yet a customer?").should("be.visible");
  });
});
