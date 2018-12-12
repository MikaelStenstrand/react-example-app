import React from 'react';
import {sum, subtract, multiply, divide} from './scripts/math.js';

it('should sum to 10', () => {
  const value = sum(5,5);
  const result = 10;
  expect(value).toEqual(result);
});

it('should subtract to 0', () => {
  const value = subtract(5,5);
  const result = 0;
  expect(value).toEqual(result);
});

it('should multiply to 25', () => {
  const value = multiply(5,5);
  const result = 25;
  expect(value).toEqual(result);
});

it('should divide to 1', () => {
  const value = divide(5,5);
  const result = 1;
  expect(value).toEqual(result);
});