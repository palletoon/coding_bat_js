/**
 * @module sumDouble.spec.js
 * Unit tests for the Coding Bat sum double problem. see: https://codingbat.com/prob/p141905
*/

// import the code to be tested
const { sumDouble } = require('./sumDouble')

describe('The sumDouble() function', () => {
    it('will return the sum of two integers if they are not the same', () => {
        expect(sumDouble(1, 2)).toBe(3)
        expect(sumDouble(10, 20)).toBe(30)
        expect(sumDouble(-1, 2)).toBe(1)
        expect(sumDouble(-1, -2)).toBe(-3)
        expect(sumDouble(17, 0)).toBe(17)
        expect(sumDouble(4.73, 6.92)).toBe(11.65)
    })  
    
    it('will return DOUBLE the sum if the two numbers are the same', () => {
        expect(sumDouble(1, 1)).toBe(4)
        expect(sumDouble(-2, -2)).toBe(-8)
        expect(sumDouble(0, 0)).toBe(0)
        expect(sumDouble(3.7, 3.7)).toBe(14.8)
    })
})