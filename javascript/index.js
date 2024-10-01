import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div>
            <header classname="App">
                <h1>Hello World</h1>
            </header>
            
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
);
