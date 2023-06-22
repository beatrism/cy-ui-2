/// <reference types="cypress"/>

describe('Funcionalidade de Produto', () => {

    beforeEach(() => {

        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')

    });

    it('Deve selecionar o produto da lista', () => {
        cy.get('[class="product-block grid"]')
        .contains('Abominable Hoodie')
        .click()


    }
    );

    it('Deve adicionar um produto no carrinho', () => {
        var n = 5
        cy.get('[class="product-block grid"]')
        .contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(n)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', n)
        cy.get('.woocommerce-message').should('contain', n + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    }
    );

    
});