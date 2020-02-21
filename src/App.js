import React from 'react';
import './App.css';
import ArrayGrid from './components/arrayGrid'

class App extends React.Component {
    render() {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8];

        return (
            <ArrayGrid arr={arr} rows={3} cols={2} />
        );
    }
}

export default App;
