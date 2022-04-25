import { SwipeEvent } from './../lib/SwipeEvent'

export function calcAngle(e: SwipeEvent) {
    const dx = Math.abs(e.x - e.x0)
    const dy = Math.abs(e.y - e.y0)

    if (dx === 0 || dy === 0) {
        if (dx === 0) {
            if (e.y - e.y0 < 0) {
                return 90
            } else if (e.y - e.y0 > 0) {
                return 270
            } else {
                return 0
            }
        } else if (dy === 0) {
            if (e.x - e.x0 < 0) {
                return 180
            } else if (e.x - e.x0 > 0) {
                return 0
            } else {
                return 0
            }
        }
    }

    let angle = Math.atan(dy / dx) * 180 / Math.PI

    if (e.x < e.x0) {
        if (e.y < e.y0) {
            angle = 180 - angle
        }

        else if (e.y > e.y0) {
            angle = 180 + angle
        }
    } else if (e.x > e.x0) {
        if (e.y > e.y0) {
            angle = 360 - angle
        }
    }

    return angle
}