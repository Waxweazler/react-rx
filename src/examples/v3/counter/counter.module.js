import React from 'react';
import {Counter} from '../../../modules/counter/counter.module';
import {CounterElement} from '../../../modules/counter/element/counter.element.module';
import {CounterInput} from './counter.input.module';
import {CounterOutput} from './counter.output.module';
import {CounterProvider} from './counter.provider';

export const CounterV3 = () => {

    return (
        <CounterProvider>
            <Counter>
                <CounterElement>
                    <CounterInput/>
                </CounterElement>
                <CounterElement>
                    <CounterOutput/>
                </CounterElement>
            </Counter>
        </CounterProvider>
    );

};
