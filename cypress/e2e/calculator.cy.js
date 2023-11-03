describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
})

it('should update the running total display when number buttons are clicked', () => {
  cy.get('#number2').click();
  cy.get('.display').should('contain', '2');
  cy.get('#number3').click();
  cy.get('.display').should('contain', '23');
});

it('should update the display with the result of arithmetic operations', () => {
  cy.get('#number2').click();
  cy.get('#add').click();
  cy.get('#number2').click();
  cy.get('#equals').click();
  cy.get('.display').should('contain', '4');
});

it('should allow chaining of multiple operations', () => {
  cy.get('#number3').click();
  cy.get('#add').click();
  cy.get('#number1').click();
  cy.get('#subtract').click();
  cy.get('#number2').click();
  cy.get('#equals').click();
  cy.get('.display').should('contain', '2');
});

it('should add positive numbers correctly', () => {
  cy.get('#number5').click();
  cy.get('#add').click();
  cy.get('#number3').click();
  cy.get('#equals').click();
  cy.get('.display').should('contain', '8');
});

it('should subtract positive numbers correctly', () => {
  cy.get('#number7').click();
  cy.get('#subtract').click();
  cy.get('#number2').click();
  cy.get('#equals').click();
  cy.get('.display').should('contain', '5');
});

it('should multiply positive numbers correctly', () => {
  cy.get('#number4').click();
  cy.get('#multiply').click();
  cy.get('#number6').click();
  cy.get('#equals').click();
  cy.get('.display').should('contain', '24');
});

it('should divide positive numbers correctly', () => {
  cy.get('#number1').click();
  cy.get('#number0').click();
  cy.get('#divide').click();
  cy.get('#number2').click();
  cy.get('#equals').click();
  cy.get('.display').should('contain', '5');
});

it('should add negative numbers correctly', () => {
  cy.get('#subtract').click();
  cy.get('#number5').click();
  cy.get('#add').click();
  cy.get('#subtract').click();
  cy.get('#number3').click();
  cy.get('#equals').click();
  cy.get('.display').should('contain', '-8');
});

it('should subtract negative numbers correctly', () => {
  cy.get('#subtract').click();
  cy.get('#number7').click();
  cy.get('#subtract').click();
  cy.get('#subtract').click();
  cy.get('#number2').click();
  cy.get('#equals').click();
  cy.get('.display').should('contain', '-5');
});

it('should multiply negative numbers correctly', () => {
  cy.get('#subtract').click();
  cy.get('#number4').click();
  cy.get('#multiply').click();
  cy.get('#subtract').click();
  cy.get('#number6').click();
  cy.get('#equals').click();
  cy.get('.display').should('contain', '24');
});

it('should divide negative numbers correctly', () => {
  cy.get('#subtract').click();
  cy.get('#number1').click();
  cy.get('#number0').click();
  cy.get('#divide').click();
  cy.get('#subtract').click();
  cy.get('#number2').click();
  cy.get('#equals').click();
  cy.get('.display').should('contain', '5');
});


it('should add decimal numbers correctly', () => {
  cy.get('#number2').click();
  cy.get('#decimal').click();
  cy.get('#number5').click();
  cy.get('#add').click();
  cy.get('#number1').click();
  cy.get('#decimal').click();
  cy.get('#number3').click();
  cy.get('#equals').click();
  cy.get('.display').should('contain', '3.8');
});

it('should subtract decimal numbers correctly', () => {
  cy.get('#number3').click();
  cy.get('#decimal').click();
  cy.get('#number7').click();
  cy.get('#subtract').click();
  cy.get('#number1').click();
  cy.get('#decimal').click();
  cy.get('#number2').click();
  cy.get('#equals').click();
  cy.get('.display').should('contain', '2.5');
});

it('should multiply decimal numbers correctly', () => {
  cy.get('#number2').click();
  cy.get('#decimal').click();
  cy.get('#number5').click();
  cy.get('#multiply').click();
  cy.get('#number1').click();
  cy.get('#decimal').click();
  cy.get('#number6').click();
  cy.get('#equals').click();
  cy.get('.display').should('contain', '4.0');
});

it('should divide decimal numbers correctly', () => {
  cy.get('#number3').click();
  cy.get('#decimal').click();
  cy.get('#number6').click();
  cy.get('#divide').click();
  cy.get('#number1').click();
  cy.get('#decimal').click();
  cy.get('#number2').click();
  cy.get('#equals').click();
  cy.get('.display').should('contain', '3.0');
});

it('should add very large numbers correctly', () => {
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#add').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#equals').click();
  cy.get('.display').should('contain', '19999999999999998');
});

it('should subtract very large numbers correctly', () => {
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#subtract').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#number9').click();
  cy.get('#equals').click();
  cy.get('.display').should('contain', '1');
});

it('should handle division by zero gracefully', () => {
  cy.get('#number5').click();
  cy.get('#divide').click();
  cy.get('#number0').click();
  cy.get('#equals').click();
  cy.get('.display').should('contain', 'Infinity');
});