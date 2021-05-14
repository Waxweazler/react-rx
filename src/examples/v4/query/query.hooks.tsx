import {MutationFunction, useMutation, useQuery, useQueryClient} from 'react-query';
import {CounterAPI} from './query.api';

const useInvalidationMutation = (mutation: MutationFunction) => {
    const queryClient = useQueryClient();
    return useMutation(mutation, {
        onSuccess: () => queryClient.invalidateQueries('fetchCounter')
    });
};

export const useCounterValue = () => useQuery('fetchCounter', CounterAPI.fetch);
export const useCounterActions = () => ({
    increment: useInvalidationMutation(CounterAPI.increment),
    decrement: useInvalidationMutation(CounterAPI.decrement)
});
