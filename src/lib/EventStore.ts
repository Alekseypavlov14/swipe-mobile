import { SwipeHandler } from './SwipeHandler'

export interface EventStore {
    leftSwipeHandler?: SwipeHandler
    rightSwipeHandler?: SwipeHandler
    topSwipeHandler?: SwipeHandler,
    bottomSwipeHandler?: SwipeHandler,

    leftSwipingHandler?: SwipeHandler,
    rightSwipingHandler?: SwipeHandler,
    topSwipingHandler?: SwipeHandler,
    bottomSwipingHandler?: SwipeHandler
}