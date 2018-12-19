import React from 'react';
import { sum, filterData } from './scripts/math.js';

const data = {
    clients: [
      {
        name: "herp",
        email: "derp"
      },
      {
        name: "erkki",
        email: "jussi"
      },
      {
        name: "3",
        email: "4"
      }
    ]
  };

it('should sum the values to be equal 20', () => {
    const value = sum(10,10);
    const result = 20;
    expect(value).toEqual(result);
});
it('should sum the values to be equal 25', () => {
    const value = sum(5,20);
    const result = 25;
    expect(value).toEqual(result);
});


it('data formatter should work as designerd', () => {
    const value = filterData(data);
    const expectedResult = [ 'herp', 'erkki', '3' ];
    expect(value).toEqual(expectedResult);
    expect(value.length).toEqual(3);
});