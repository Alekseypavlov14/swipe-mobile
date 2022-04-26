import { SwipeHandler } from './SwipeHandler'

export interface AddSwipeEvent {
    left: (callback: SwipeHandler) => void,
    right: (callback: SwipeHandler) => void,
    top: (callback: SwipeHandler) => void,
    bottom: (callback: SwipeHandler) => void,

    leftSwiping: (callback: SwipeHandler) => void,
    rightSwiping: (callback: SwipeHandler) => void,
    topSwiping: (callback: SwipeHandler) => void,
    bottomSwiping: (callback: SwipeHandler) => void
}