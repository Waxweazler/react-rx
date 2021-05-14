import {PropsWithChildren} from 'react';

export type ChildrenOnlyProps = PropsWithChildren<{}>;

export type Counter = {
    value: number
};

export type CounterActionsProps = CounterInputProps & {
    isLoading?: boolean
};

export type CounterContextType = CounterInputProps & CounterOutputProps;

export type CounterInputProps = {
    increment: () => void,
    decrement: () => void
};

export type CounterOutputProps = {
    value: string | number
};

export type CounterValueProps = CounterOutputProps;

export type ExampleProps = PropsWithChildren<{
    description: string
}>;

export type ReduxStore = {
    counter: Counter
};
