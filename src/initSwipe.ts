import { SwipeEvent } from './lib/SwipeEvent'
import { EventStore } from './lib/EventStore'
import { AddSwipeEvent } from './lib/AddSwipeEvent'

import { touchStartHandler } from './handlers/touchStartHandler'
import { touchMoveHandler } from './handlers/touchMoveHandler'
import { touchEndHandler } from './handlers/touchEndHandler'

function initSwipe(element: HTMLElement) {
    const store: EventStore = {}

    const SwipeEvent: SwipeEvent = {
        x0: 0,
        y0: 0,
        x: 0,
        y: 0,
        distance: 0,
        angle: 0,
        target: null,
    }

    element.addEventListener('touchstart', (e) => {
        touchStartHandler(e, SwipeEvent)
    })

    element.addEventListener('touchmove', (e) => {
        touchMoveHandler(e, SwipeEvent, store)
    })

    element.addEventListener('touchend', (e) => {
        touchEndHandler(e, SwipeEvent, store)
    })

    const AddEvent: AddSwipeEvent = {
        left: (callback) => store.leftSwipeHandler = callback,
        right: (callback) => store.rightSwipeHandler = callback,
        top: (callback) => store.topSwipeHandler = callback,
        bottom: (callback) => store.bottomSwipeHandler = callback,

        leftSwiping: (callback) => store.leftSwipingHandler = callback,
        rightSwiping: (callback) => store.rightSwipingHandler = callback,
        topSwiping: (callback) => store.topSwipingHandler = callback,
        bottomSwiping: (callback) => store.bottomSwipingHandler = callback
    }

    return AddEvent
}

export { initSwipe }