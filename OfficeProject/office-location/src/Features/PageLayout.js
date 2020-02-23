import React from 'react';
import { Route } from 'react-router-dom';


export default function PageLayout({ component:Component, ...rest }) {

    return (

        <Route {...rest} render={matchProps => (
            <div className="DefaultLayout">
                <div className="Header">Header</div>
                <Component {...matchProps} />
                <div className="Footer">Footer</div>
            </div>
        )} />
    )
}