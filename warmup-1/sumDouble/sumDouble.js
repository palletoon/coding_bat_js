/**
 * @module sumDouble.js
 * Implements the solution to the Coding Bat sum double problem. See: https://codingbat.com/prob/p141905
 */

const sumDouble = (x, y) => (x === y ? 2 : 1) * (x + y)

 //export the method
 module.exports = {
     sumDouble
 }