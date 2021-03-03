/**
 * @module sleepIn.spec.js
 * Unit tests for the sleep_in function for [this Coding Bat Problem](https://codingbat.com/prob/p173401)
 */

 // import the code to be tested
 const { sleepIn } = require('./sleepIn')

 describe('A sleepIn() function', () => {
    it('determines whether or not we should sleep in', () => {
        expect(sleepIn(true, true)). toBe(true) //weekday but on vacation ==> sleep in
        expect(sleepIn(true, false)). toBe(false) //weekday but NOT on vacation ==> do NOT sleep in
        expect(sleepIn(false, true)). toBe(true) //weekend but on vacation ==> sleep in
        expect(sleepIn(false, false)). toBe(true) //weekend but NOT on vacation ==> sleep in
    })
 })