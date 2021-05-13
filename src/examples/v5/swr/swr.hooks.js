import useSWR, {mutate} from 'swr';
import {CounterAPI} from './swr.api';

export const useCounterValue = () => {
    const {data, isValidating} = useSWR('/counter', CounterAPI.fetch);
    return {
        data: data,
        isLoading: !data || isValidating
    };
};
export const useCounterActions = () => ({
    increment: () => mutate('/counter', CounterAPI.increment),
    decrement: () => mutate('/counter', CounterAPI.decrement)
});
