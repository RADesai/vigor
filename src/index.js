import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './containers/App';

render(
    <BrowserRouter>
        <Route exact path="/" component={App}/>
    </BrowserRouter>,
    document.getElementById('app')
);