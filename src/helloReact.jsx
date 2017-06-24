import React from 'react';
import ReactDOM from 'react-dom';

class HelloReact extends React.Component {
    render() {
        const element = (
            <div>
                <h1>Hello React!</h1>
                <h2>Good to see first module in action...</h2>
            </div>
        );
        return element
    }
}
export function renderHelloReact(){
    ReactDOM.render(<HelloReact/>, document.getElementById('helloReact'));
}


