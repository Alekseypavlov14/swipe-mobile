import { SwipeEvent } from './../lib/SwipeEvent'

export function calcDistance(e: SwipeEvent) {
    return Math.sqrt((e.x - e.x0) ** 2 + (e.y - e.y0) ** 2)
}