import { SwipeEvent } from './lib/SwipeEvent'
import { EventStore } from './lib/EventStore'
import { AddSwipeEvent } from './lib/AddSwipeEvent'

import { touchStartHandler } from './handlers/touchStartHandler'
import { touchMoveHandler } from './handlers/touchMoveHandler'
import { touchEndHandler } from './handlers/touchEndHandler'

function initSwipe(element: HTMLElement) {
    const store: EventStore = {
        topSwipeHandlers: [],
        rightSwipeHandlers: [],
        bottomSwipeHandlers: [],
        leftSwipeHandlers: [],

        topSwipingHandlers: [],
        rightSwipingHandlers: [],
        bottomSwipingHandlers: [],
        leftSwipingHandlers: []
    }

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
        left: (callback) => store.leftSwipeHandlers.push(callback),
        right: (callback) => store.rightSwipeHandlers.push(callback),
        top: (callback) => store.topSwipeHandlers.push(callback),
        bottom: (callback) => store.bottomSwipeHandlers.push(callback),

        leftSwiping: (callback) => store.leftSwipingHandlers.push(callback),
        rightSwiping: (callback) => store.rightSwipingHandlers.push(callback),
        topSwiping: (callback) => store.topSwipingHandlers.push(callback),
        bottomSwiping: (callback) => store.bottomSwipingHandlers.push(callback)
    }

    return AddEvent
}

export { initSwipe }