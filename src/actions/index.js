import {INCREMENT_COUNTER, DECREMENT_COUNTER} from '../contants/Counter'

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
            counter
        } = getState();
        if (counter % 2 == 0) {
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