import React from 'react';
import './App.css';
import CardGrid from './components/cardGrid'

class App extends React.Component {
    render() {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8];

        return (
            <CardGrid arr={arr} rows={3} cols={2} />
        );
    }
}

export default App;
