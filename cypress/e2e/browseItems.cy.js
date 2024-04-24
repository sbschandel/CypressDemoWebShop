describe('Product browsing', () => {
    beforeEach(() => {
      cy.visit('https://demowebshop.tricentis.com/')
    })
  
    it('should be able to browse products', () => {
      // Click on a product category (e.g., Computers)
      cy.get('.master-wrapper-page .header-menu a').contains('Computers').click()
  
      // Verify that the page navigates to the correct category page
      cy.url().should('include', '/computers')
      
      // Click on a product within the category
      cy.get('.item-box').first().click()
  
    //   // Verify that the product page is loaded
    //   cy.url().should('include', '/p/')
    })

  })