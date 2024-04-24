describe('Adding items to the cart', () => {
    beforeEach(() => {
      cy.visit('https://demowebshop.tricentis.com/')
    })
  
    it('should be able to add items to cart', () => {
      // Type in a search term in the search input
      cy.get('#small-searchterms').type('phone')
  
      // Click on the search button
      cy.get('.search-box-button').click()
  
      // Verify that search results are displayed
      cy.get('.search-results').should('exist')
  
      // Add the product to the cart
      cy.get("#button-2 product-box-add-to-cart-button").click()
  
      // Handle any pop-ups (e.g., confirmation pop-up)
      cy.get('.bar-notification').should('be.visible')
        .contains('The product has been added to your shopping cart')
        .find('.close').click()
  
      // Wait for the mini cart to update
      cy.get('.header-links .cart-qty').should('have.text', '1')
      
      // Navigate to the cart page
      cy.get('.header-links .ico-cart').click()
  
      // Verify that the cart page is loaded
      cy.url().should('include', '/cart')
      
      // Verify that the product is in the cart
      cy.get('.cart').should('contain.text', 'Phone')
    })
  })
  