# sleep_in

[Original Probelm](https://codingbat.com/prob/p173401)

The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.

## Project Log

First attempt
```js
 const sleepIn = (weekday, vacation) => {
    // first, check if it's a weekday or not
    if (weekday === true) {
        // yes, weekday; are we on vacation
        if (vacation === true) {
            //on vacation, sleep in
            return true
        } else {
                //weekday, no vacation
          return false
        }
    } else {
        //weekend; are we on vacation?
        if (vacation === true) {
            // weekend and vacation
            return true
        } else {
            //weekday BUT vacation
            return true
        }
    }
 }
 ```

Last attempt
```js
const sleepIn = (weekday, vacation) => !(weekday && !vacation)
```