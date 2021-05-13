import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './modules/app/app.module';
import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
