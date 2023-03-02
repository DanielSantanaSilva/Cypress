describe("alura search courses", () => {
  beforeEach(() => {
    cy.visit("https://www.alura.com.br");
  });

  it("search javascript course", () => {
    cy.get("#header-barraBusca-form-campoBusca").type("Javascript");
    cy.get(".header-barraBusca-form-submit").click();
    cy.get(
      ":nth-child(3) > .busca-resultado-link > .busca-resultado-container > .busca-resultado-nome"
    ).should("have.text", "Formação JavaScript para back-end");
  });
});
