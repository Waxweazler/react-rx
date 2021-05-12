const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const initialState = {
    value: 0
};

const handleChange = (state, change) => {
    return {
        value: state.value + change
    };
};

export const increment = () => {
    return {type: INCREMENT};
}

export const decrement = () => {
    return {type: DECREMENT};
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return handleChange(state, 1);
        case DECREMENT:
            return handleChange(state, -1);
        default:
            return state;
    }
}
