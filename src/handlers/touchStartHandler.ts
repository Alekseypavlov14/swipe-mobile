import { SwipeEvent } from './../lib/SwipeEvent'

export function touchStartHandler(e: TouchEvent, SwipeEvent: SwipeEvent) {
    const TouchStartEvent = e.touches[0]

    SwipeEvent.x0 = TouchStartEvent.clientX
    SwipeEvent.y0 = TouchStartEvent.clientY

    SwipeEvent.target = e.target
}