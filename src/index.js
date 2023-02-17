// import React from 'react';
// import { render } from 'react-dom';
// import 'normalize.css';
// import App from './app';
// import { GlobalStyles } from './global-styles';

// render(<>
//     <GlobalStyles />
//     <App />
// </>,
//     document.getElementById('root'));




import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
// import { render } from 'react-dom';
import 'normalize.css';
import App from './app';
import { GlobalStyles } from './global-styles';
import { FirebaseContext } from './context/firebase'
import { firebase } from "./lib/firebase.prod";


let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <StrictMode>
            <FirebaseContext.Provider value={{ firebase }}>
                <GlobalStyles />
                <App />
            </FirebaseContext.Provider>
        </StrictMode>
    </>
);