describe("Form App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })
    // set up getters
    const nameInput = () => cy.get("input[name=name]");
    const usernameInput = () => cy.get("input[name=username]");
    const emailInput = () => cy.get("input[name=email]");
    const passwordInput = () => cy.get("input[name=password]");
    const genreInput = () => cy.get("select");
    const radioBTNInput = () => cy.get('[type="radio"]');
    const checkBoxInput = () => cy.get('[type="checkbox"]');
})