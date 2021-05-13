import React from 'react';
import {Counter} from '../../modules/counter/counter.module';
import {CounterElement} from '../../modules/counter/element/counter.element.module';
import {CounterProvider} from './counter.provider';
import {CounterInputV3} from './modules/counter.input.module';
import {CounterOutputV3} from './modules/counter.output.module';

export const CounterV3 = () => {

    return (
        <Counter>
            <CounterProvider>
                <CounterElement>
                    <CounterInputV3/>
                </CounterElement>
                <CounterElement>
                    <CounterOutputV3/>
                </CounterElement>
            </CounterProvider>
        </Counter>
    );

};
