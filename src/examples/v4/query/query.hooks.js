import {useMutation, useQuery, useQueryClient} from 'react-query';
import {CounterAPI} from './query.api';

const useInvalidationMutation = mutation => {
    const queryClient = useQueryClient();
    return useMutation(mutation, {
        onSuccess: () => queryClient.invalidateQueries('fetchCounter')
    });
};

export const useCounterValue = () => useQuery('fetchCounter', CounterAPI.fetch);
export const useCounterActions = () => ({
    increment: useInvalidationMutation(CounterAPI.increment).mutate,
    decrement: useInvalidationMutation(CounterAPI.decrement).mutate
});
