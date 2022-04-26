import { SwipeEvent } from './../lib/SwipeEvent'

export function calcVector(e: SwipeEvent) {
    return Math.floor((e.angle + 45) / 90) % 4
}