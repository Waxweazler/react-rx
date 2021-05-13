import React from 'react';
import {Counter} from '../../modules/counter/counter.module';
import {CounterElement} from '../../modules/counter/element/counter.element.module';
import {CounterProvider} from './counter.provider';
import {CounterInputV2} from './modules/counter.input.module';
import {CounterOutputV2} from './modules/counter.output.module';

export const CounterV2 = () => {

    return (
        <Counter>
            <CounterProvider>
                <CounterElement>
                    <CounterInputV2/>
                </CounterElement>
                <CounterElement>
                    <CounterOutputV2/>
                </CounterElement>
            </CounterProvider>
        </Counter>
    );

};
