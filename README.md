## Installation

    npm i swipe-mobile

## Usage

    const { left } = initSwipe(element)

    left((e) => {
        // do something ...
    })

Function `initSwipe` return EventController. It has the methods to set callbacks for swipe! For create listener just use function `left` or another ones with callback with one argument `event`