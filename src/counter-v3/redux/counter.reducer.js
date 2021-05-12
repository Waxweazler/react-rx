const ACTION_INCREMENT = 'INCREMENT';
const ACTION_DECREMENT = 'DECREMENT';
const INITIAL_STATE = {
    value: 0
};

const handleChange = (state, change) => ({
    value: state.value + change
});

export const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_INCREMENT:
            return handleChange(state, 1);
        case ACTION_DECREMENT:
            return handleChange(state, -1);
        default:
            return state;
    }
};

export const incrementCounter = () => ({type: ACTION_INCREMENT});
export const decrementCounter = () => ({type: ACTION_DECREMENT});
export const selectCounterValue = (state) => state.value;


