import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator />);
  });

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  });

  it('should add numbers correctly', () => {
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    fireEvent.click(button1);
    fireEvent.click(button4);

    const addButton = container.getByTestId('add');
    fireEvent.click(addButton);

    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('5');
  });

it('should subtract 4 from 7 and get 3', () => {
  const button7 = container.getByTestId('number7');
  const button4 = container.getByTestId('number4');
  fireEvent.click(button7);
  fireEvent.click(button4);

  const subtractButton = container.getByTestId('subtract');
  fireEvent.click(subtractButton);

  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('3');
});

it('should multiply 3 by 5 and get 15', () => {
  const button3 = container.getByTestId('number3');
  const button5 = container.getByTestId('number5');
  fireEvent.click(button3);
  fireEvent.click(button5);

  const multiplyButton = container.getByTestId('multiply');
  fireEvent.click(multiplyButton);

  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('15');
});

it('should divide 21 by 7 and get 3', () => {
  const button2 = container.getByTestId('number2');
  const button1 = container.getByTestId('number1');
  const button7 = container.getByTestId('number7');
  fireEvent.click(button2);
  fireEvent.click(button1);
  fireEvent.click(button7);

  const divideButton = container.getByTestId('divide');
  fireEvent.click(divideButton);
  fireEvent.click(button7);

  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('3');
});

it('should concatenate multiple number button clicks', () => {
  const button1 = container.getByTestId('number1');
  const button2 = container.getByTestId('number2');
  const button3 = container.getByTestId('number3');
  
  fireEvent.click(button1);
  fireEvent.click(button2);
  fireEvent.click(button3);

  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('123');
});

it('should chain multiple operations together', () => {
  const button2 = container.getByTestId('number2');
  const button3 = container.getByTestId('number3');
  const addButton = container.getByTestId('add');
  const button4 = container.getByTestId('number4');
  const multiplyButton = container.getByTestId('multiply');
  const button5 = container.getByTestId('number5');
  const subtractButton = container.getByTestId('subtract');
  const button1 = container.getByTestId('number1');
  const equalsButton = container.getByTestId('equals');
  
  fireEvent.click(button2);
  fireEvent.click(addButton);
  fireEvent.click(button3);
  fireEvent.click(multiplyButton);
  fireEvent.click(button4);
  fireEvent.click(subtractButton);
  fireEvent.click(button5);
  fireEvent.click(equalsButton);

  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('22');
});

it('should clear the running total without affecting the calculation', () => {
  const button5 = container.getByTestId('number5');
  const addButton = container.getByTestId('add');
  const button3 = container.getByTestId('number3');
  const equalsButton = container.getByTestId('equals');
  
  fireEvent.click(button5);
  fireEvent.click(addButton);
  fireEvent.click(button3);
  fireEvent.click(equalsButton);

  let runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('8');

  const clearButton = container.getByTestId('clear');
  fireEvent.click(clearButton);

  runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('0');

  const button6 = container.getByTestId('number6');
  fireEvent.click(button6);
  fireEvent.click(addButton);
  const button2 = container.getByTestId('number2');
  fireEvent.click(button2);
  fireEvent.click(equalsButton);

  runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('8');
})
});