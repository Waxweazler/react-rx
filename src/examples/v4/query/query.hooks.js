import {useMutation, useQuery, useQueryClient} from 'react-query';
import {dataApi} from './request.util';

const useInvalidationMutation = (mutation) => {
    const queryClient = useQueryClient();
    return useMutation(mutation, {
        onSuccess: () => queryClient.invalidateQueries('getCounter')
    })
};

export const useCounter = () => useQuery('getCounter', dataApi.fetch);
export const useIncrementCounter = () => useInvalidationMutation(dataApi.increment);
export const useDecrementCounter = () => useInvalidationMutation(dataApi.decrement);
