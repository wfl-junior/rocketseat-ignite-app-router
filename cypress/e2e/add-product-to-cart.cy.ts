describe("add product to cart", () => {
  it("should be able to navigate to the product page and add it to the cart", () => {
    cy.visit("/");
    cy.get("a[href^='/product']").first().click();
    cy.location("pathname").should("include", "/product");
    cy.contains("Adicionar ao carrinho").click();
    cy.contains("Carrinho (1)").should("exist");
  });

  it("should not add to cart twice", () => {
    cy.visit("/");
    cy.get("a[href^='/product']").first().click();
    cy.location("pathname").should("include", "/product");
    cy.contains("Adicionar ao carrinho").click();
    cy.contains("Adicionar ao carrinho").click();
    cy.contains("Carrinho (1)").should("exist");
  });

  it("should be able to search for a product and it to the cart", () => {
    cy.searchByQuery("moletom");
    cy.location("pathname").should("equal", "/search");
    cy.location("search").should("include", "q=moletom");
    cy.get("a[href^='/product']").first().click();
    cy.location("pathname").should("include", "/product");
    cy.contains("Adicionar ao carrinho").click();
    cy.contains("Carrinho (1)").should("exist");
  });
});
