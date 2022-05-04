import { SwipeHandler } from './SwipeHandler'

export interface EventStore {
    leftSwipeHandlers: SwipeHandler[]
    rightSwipeHandlers: SwipeHandler[]
    topSwipeHandlers: SwipeHandler[],
    bottomSwipeHandlers: SwipeHandler[],

    leftSwipingHandlers: SwipeHandler[],
    rightSwipingHandlers: SwipeHandler[],
    topSwipingHandlers: SwipeHandler[],
    bottomSwipingHandlers: SwipeHandler[]
}