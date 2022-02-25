describe("Form App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })
    // set up getters
    const nameInput = () => cy.get("input[name=name]");
    const emailInput = () => cy.get("input[name=email]");
    const passwordInput = () => cy.get("input[name=password]");
    const checkBoxInput = () => cy.get('[type="checkbox"]');
    // const usernameInput = () => cy.get("input[name=username]");
    // const genreInput = () => cy.get("select");
    // const radioBTNInput = () => cy.get('[type="radio"]');
    
    // sanity check
    it("sanity test to make sure tests work", () => {
        expect(1+2).to.equal(3);
        expect(1+2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })
    describe("Running all MVP tests", () => {
        it("can type in name input", () => {
            nameInput()
                .should("have.value", "")
                .type("Rimuru Tempest")
                .should("have.value", "Rimuru Tempest")
        })
        it("can type in email input", () => {
            emailInput()
                .should("have.value", "")
                .type("slimelord@tempest.net")
                .should("have.value", "slimelord@tempest.net")
        })
        it("can type in password input", () => {
            passwordInput()
                .should("have.value", "")
                .type("SlimesRule90")
                .should("have.value", "SlimesRule90")
        })
        it("can check terms of service box", () => {

        })
        it("can submit form data", () => {

        })
        it("can check form validation", () => {
            
        })
        
        // describe("running stretch tests", () => {
        //     it("can type in username inputs", () => {
        //         usernameInput()
        //             .should("have.value", "")
        //             .type("LordRimuru")
        //             .should("have.value", "LordRimuru")
                  
        //     })
        // })
    })
})