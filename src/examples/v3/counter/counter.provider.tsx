import {Provider} from 'react-redux';
import {createStore} from '../redux/redux.store';
import {ChildrenOnlyProps} from '../../../types';

export const CounterProvider = ({children}: ChildrenOnlyProps) => (

    <Provider store={createStore()}>
        {children}
    </Provider>

);
