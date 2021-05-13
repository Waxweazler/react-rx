import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

export const CounterProvider = props => {

    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {props.children}
        </QueryClientProvider>
    );

};
