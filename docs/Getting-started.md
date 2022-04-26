## Start

This package helps you to use **swipes** in your JavaScript applications.

## Installation

    npm i swipe-mobile

## Usage

To start using swipes, you need to import main function:

    import { initSwipe } from 'swipe-mobile'

Then you need to call this function with one argument `HTMLElement`. This element will be an area for swiping. The function returns an object `EventController`.
It would be better to use `destructuring assignment` to get only those methods you need:

    const { right, top } = initSwipe(element)

Then to set a callback that will be called every time *after* user will swipe some direction, call the function which is named as well as the direction:

    right((e) => {
        // do something ...
    })

This callback can have a parameter `e` that will get all the necessary properties of **SwipeEvent**! 

## Process callbacks

If you want to do something while user is swiping, you can use functions like `leftSwiping`. It has the same syntax as last one:

    leftSwiping((e) => {
        // do something ...
    })

This functions you also can get from the `initSwipe` function.