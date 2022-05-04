import { EventStore } from '../lib/EventStore'
import { SwipeEvent } from '../lib/SwipeEvent'

import { calcAngle } from '../calculations/calcAngle'
import { calcDistance } from '../calculations/calcDistance'
import { calcVector } from '../calculations/calcVector'

export function touchEndHandler(e: TouchEvent, SwipeEvent: SwipeEvent, store: EventStore) {
    const TouchEndEvent = e.changedTouches[0]

    SwipeEvent.x = TouchEndEvent.clientX
    SwipeEvent.y = TouchEndEvent.clientY

    SwipeEvent.distance = calcDistance(SwipeEvent)
    SwipeEvent.angle = calcAngle(SwipeEvent)

    const vector = calcVector(SwipeEvent)

    if (vector === 0) return store.rightSwipeHandlers.forEach(handler => handler(SwipeEvent))
    if (vector === 1) return store.topSwipeHandlers.forEach(handler => handler(SwipeEvent))
    if (vector === 2) return store.leftSwipeHandlers.forEach(handler => handler(SwipeEvent))
    if (vector === 3) return store.bottomSwipeHandlers.forEach(handler => handler(SwipeEvent))
}