import { SwipeEvent } from './lib/SwipeEvent'
import { EventStore } from './lib/EventStore'
import { AddSwipeEvent } from './lib/AddSwipeEvent'

import { calcDistance } from './calculations/calcDistance'
import { calcAngle } from './calculations/calcAngle'

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

    element.addEventListener('touchmove', (e) => {})

    element.addEventListener('touchend', (e) => {
        const TouchEndEvent = e.changedTouches[0]

        SwipeEvent.x = TouchEndEvent.clientX
        SwipeEvent.y = TouchEndEvent.clientY

        SwipeEvent.distance = calcDistance(SwipeEvent)
        SwipeEvent.angle = calcAngle(SwipeEvent)

        if (SwipeEvent.distance > 40) {
            const vector = Math.floor((SwipeEvent.angle + 45) / 90) % 4

            if (vector === 0) return store.rightSwipeHandler && store.rightSwipeHandler(SwipeEvent)
            if (vector === 1) return store.topSwipeHandler && store.topSwipeHandler(SwipeEvent)
            if (vector === 2) return store.leftSwipeHandler && store.leftSwipeHandler(SwipeEvent)
            if (vector === 3) return store.bottomSwipeHandler && store.bottomSwipeHandler(SwipeEvent)
        }
    })

    const AddEvent: AddSwipeEvent = {
        left: (callback) => {
            store.leftSwipeHandler = callback
        },
        right: (callback) => {
            store.rightSwipeHandler = callback
        },
        top: (callback) => {
            store.topSwipeHandler = callback
        },
        bottom: (callback) => {
            store.bottomSwipeHandler = callback
        }
    }

    return AddEvent
}

export { initSwipe }