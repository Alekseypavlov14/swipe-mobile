interface SwipeEvent {
    x0: number,
    y0: number,
    x: number,
    y: number,
    distance: number,
    angle: number,
    target: EventTarget | null
}

type SwipeHandler = (e: SwipeEvent) => void

interface EventStore {
    leftSwipeHandler?: SwipeHandler
    rightSwipeHandler?: SwipeHandler
    topSwipeHandler?: SwipeHandler,
    bottomSwipeHandler?: SwipeHandler
}

interface AddSwipeEvent {
    left: (callback: SwipeHandler) => void,
    right: (callback: SwipeHandler) => void,
    top: (callback: SwipeHandler) => void,
    bottom: (callback: SwipeHandler) => void
}

function initSwipe(element: HTMLElement): AddSwipeEvent {
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

// ========================= //

function calcDistance(e: SwipeEvent) {
    return Math.sqrt((e.x - e.x0) ** 2 + (e.y - e.y0) ** 2)
}

function calcAngle(e: SwipeEvent) {
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

export { initSwipe }