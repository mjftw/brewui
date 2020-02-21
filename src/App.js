import React from 'react';
import './App.css';
import CardGrid from './components/cardGrid'

class App extends React.Component {
    render() {
        let arr = [];
        for (var i = 0; i < 9; i++) {
            var img = <img src={'https://picsum.photos/200?' + i} />;
            arr.push(img);
        }

        return (
            <CardGrid arr={arr} rows={3} cols={3} />
        );
    }
}

export default App;
