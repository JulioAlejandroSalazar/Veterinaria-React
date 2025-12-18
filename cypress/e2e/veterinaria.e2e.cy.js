describe("Veterinaria App - Pruebas E2E", () => {

    // 1. La página principal carga correctamente
    it("Carga la página principal y muestra el título", () => {
      cy.visit("/");
      cy.contains("Veterinaria Cuidado Animal").should("be.visible");
    });
  
    // 2. Muestra al menos una cita (appointment)
    it("Muestra al menos una cita", () => {
      cy.visit("/");
      cy.get("[data-testid='appointment-card']").should("have.length.at.least", 1);
    });
  
    // 3. Permite abrir los detalles de una cita
    it("Permite abrir los detalles de una cita", () => {
      cy.visit("/");
  
      cy.get("[data-testid='appointment-card']").first().click();
  
      cy.contains("Propietario:").should("be.visible");
      cy.contains("Teléfono:").should("be.visible");
      cy.contains("Fecha:").should("be.visible");
    });
  
    // 4. Permite volver al home desde el header
    it("Permite volver al home", () => {
      cy.visit("/");
  
      cy.get("[data-testid='appointment-card']").first().click();
  
      cy.get("header").contains("Veterinaria Cuidado Animal").click();
  
      cy.contains("Veterinaria Cuidado Animal").should("be.visible");
      cy.get("[data-testid='appointment-card']").should("exist");
    });
  
  });
  