const ACTION_TYPES = {
    INCREMENT_COUNTER: 'INCREMENT_COUNTER',
    DECREMENT_COUNTER: 'DECREMENT_COUNTER'
};

const INITIAL_STATE = {
    value: 0
};

const handleChange = (state, change) => ({
    value: state.value + change
});

export const incrementCounter = () => ({type: ACTION_TYPES.INCREMENT_COUNTER});
export const decrementCounter = () => ({type: ACTION_TYPES.DECREMENT_COUNTER});
export const selectCounterValue = ({counter}) => counter.value;

export const counterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_TYPES.INCREMENT_COUNTER:
            return handleChange(state, 1);
        case ACTION_TYPES.DECREMENT_COUNTER:
            return handleChange(state, -1);
        default:
            return state;
    }
};
