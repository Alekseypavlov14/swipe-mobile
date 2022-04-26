## Installation

    npm i swipe-mobile

## Usage

    const { left } = initSwipe(element)

    left((e) => {
        // do something ...
    })

Function `initSwipe` returns EventController. It has the methods to set callbacks for swipe! To create listener, just use the function `left` or another one with callback with one parameter `event`.

## Documentation

Full documentation is [here](./docs/Getting-started.md)