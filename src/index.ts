import { SwipeEvent } from './lib/SwipeEvent'
import { EventStore } from './lib/EventStore'
import { AddSwipeEvent } from './lib/AddSwipeEvent'

import { touchEndHandler } from './handlers/touchEndHandler'
import { touchMoveHandler } from './handlers/touchMoveHandler'

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
        const TouchStartEvent = e.touches[0]

        SwipeEvent.x0 = TouchStartEvent.clientX
        SwipeEvent.y0 = TouchStartEvent.clientY

        SwipeEvent.target = e.target
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