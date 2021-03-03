# sleep_in

[Original Probelm](https://codingbat.com/prob/p173401)

The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.

## Project Log

The first code was too long.

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

The output is always `true` excpet in one case, so I shortened it.
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
        //weekend
        return true
    }
}
 ```

Third attempt
 ```js
const sleepIn = (weekday, vacation) => {
    // first, check if it's a weekday or not
    if (weekday) {
        // yes, weekday; are we on vacation
        if (vacation) {
            //on vacation, sleep in
          return true
        } else {
                //weekday, no vacation
          return false
        }
    } else {
        //weekend
        return true
    }
}
 ```

Fourth attempt
 ```js
const sleepIn = (weekday, vacation) => {
    if (weekday && !vacation) {
        return false
    }
    return true
}
 ```

Fifth attempt
```js
const sleepIn = (weekday, vacation) => {
    return !(weekday && !vacation)
}
```

Last attempt. I used given and implied meanings to shorten the program into one line.
```js
const sleepIn = (weekday, vacation) => !(weekday && !vacation)
```