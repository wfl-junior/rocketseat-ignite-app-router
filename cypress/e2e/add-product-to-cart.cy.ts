describe("add product to cart", () => {
  it("should be able to navigate to the product page and add it to the cart", () => {
    cy.visit("http://localhost:3000");
    cy.get("a[href^='/product']").first().click();
    cy.location("pathname").should("include", "/product");
    cy.contains("Adicionar ao carrinho").click();
    cy.contains("Carrinho (1)").should("exist");
  });

  it("should not add to cart twice", () => {
    cy.visit("http://localhost:3000");
    cy.get("a[href^='/product']").first().click();
    cy.location("pathname").should("include", "/product");
    cy.contains("Adicionar ao carrinho").click();
    cy.contains("Adicionar ao carrinho").click();
    cy.contains("Carrinho (1)").should("exist");
  });

  it("should be able to search for a product and it to the cart", () => {
    cy.visit("http://localhost:3000");
    cy.get("input[name='q']").type("moletom").parent("form").submit();
    cy.get("a[href^='/product']").first().click();
    cy.location("pathname").should("include", "/product");
    cy.contains("Adicionar ao carrinho").click();
    cy.contains("Carrinho (1)").should("exist");
  });
});
