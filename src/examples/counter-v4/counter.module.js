import React from 'react';
import {Counter} from '../../modules/counter/counter.module';
import {CounterElement} from '../../modules/counter/element/counter.element.module';
import {CounterProvider} from './counter.provider';
import {CounterInputV4} from './modules/counter.input.module';
import {CounterOutputV4} from './modules/counter.output.module';

export const CounterV4 = () => {

    return (
        <Counter>
            <CounterProvider>
                <CounterElement>
                    <CounterInputV4/>
                </CounterElement>
                <CounterElement>
                    <CounterOutputV4/>
                </CounterElement>
            </CounterProvider>
        </Counter>
    );

};
