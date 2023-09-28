import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Button Component sebagai class component
class MyButton extends Component {
    handleButtonClick = () => {
        alert(this.props.message);
    }

    render() {
        return (
            <button onClick={this.handleButtonClick} style={{ margin: "10px" }}>
                {this.props.children}
            </button>
        );
    }
}

// App Component sebagai class component
class MyApp extends Component {
    render() {
        return (
            <div>
                <h1>Learn React</h1>
                <MyButton message="Learn React">React</MyButton>
                <MyButton message="Learn JavaScript">JavaScript</MyButton>
            </div>
        );
    }
}

const myElement = <MyApp />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);
