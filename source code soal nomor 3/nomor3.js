// versi functional component
import React, { useState } from 'react';

function CounterFunctional() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h2>pengenalan react tingkat dasar</h2>
            <h3>Counter</h3>
            <p>{count}</p>
            <button onClick={handleDecrement}>-1</button>
            <button onClick={handleIncrement}>+1</button>
        </div>
    );
}

export default CounterFunctional;

// versi class component
// import React, { Component } from 'react';

// class CounterClass extends Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0
//         };
//     }

//     handleIncrement = () => {
//         this.setState({ count: this.state.count + 1 });
//     }

//     handleDecrement = () => {
//         this.setState({ count: this.state.count - 1 });
//     }

//     render() {
//         return (
//             <div>
//                 <h2>pengenalan react tingkat dasar</h2>
//                 <h3>Counter</h3>
//                 <p>{this.state.count}</p>
//                 <button onClick={this.handleDecrement}>-1</button>
//                 <button onClick={this.handleIncrement}>+1</button>
//             </div>
//         );
//     }
// }

// export default CounterClass;
