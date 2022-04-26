## Installation

    npm i swipe-mobile

## Usage

    const { left } = initSwipe(element)

    left((e) => {
        // do something ...
    })

Function `initSwipe` returns EventController. It has the methods to set callbacks for swipe! To create listener, just use the function `left` or another one with callback with one parameter `event`.

## Documentation

Full documentation is [here](https://github.com/Alekseypavlov14/swipe-mobile/tree/master/docs/Getting-started.md)