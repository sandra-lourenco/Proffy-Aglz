/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Classes endpoint', () => {
    it('POST - Cadastrar um novo professor', () => {
        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body: {
                "name": "sandra",
                "avatar": "https://pickafce.net/gallery/avatar/unr_fake_190524_1549_9fgji7.png",
                "whatsapp": "12345678900",
                "bio": "ola",
                "subject": "Ciências",
                "cost": 300,
                "schedule": [
                    {
                        "week_day":0,
                        "from": "08:00",
                        "to": "09:00"
                    }
                ]
,
            }
        }).then((response) => {
           //console.log(response)
           expect(response.status).to.eq(201)
        
    });
});
});