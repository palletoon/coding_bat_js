/**
 * @modules sleepIn.js
 * the Warmup-1/sleepIn problem from Coding Bt
 */

 /**
  * A function that determines whether or not we can sleep in on a given day, based on whether or not it is a weekday and/or we are on vacation.
  * @param   {boolean} weekday  Is today a weekday?
  * @param   {boolean} vacation Are we on vacation?
  * @returns {boolean}          Should we sleep in?
  */
 const sleepIn = (weekday, vacation) => !(weekday && !vacation)

 module.exports = {
     sleepIn
 }