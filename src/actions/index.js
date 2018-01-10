import {INCREMENT_COUNTER, DECREMENT_COUNTER} from '../contants/CounterContants'

export function decrement() {
    return {
        type: DECREMENT_COUNTER
    }
}

export function increment() {
    return {
        type: INCREMENT_COUNTER
    }
}

export function incrementIfOdd() {
    return (dispatch, getState) => {
        const {
            count
        } = getState();
        if (count % 2 == 0) {
            return;
        }
        dispatch(increment());
    }
}

export function incrementAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment());
        }, 1000);
    };
}