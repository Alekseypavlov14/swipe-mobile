export interface SwipeEvent {
    x0: number,
    y0: number,
    x: number,
    y: number,
    distance: number,
    angle: number,
    target: EventTarget | null
}