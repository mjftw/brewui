import React from 'react';
import Card from 'react-bootstrap/Card'
import ArrayGrid from './arrayGrid'

class cardGrid extends React.Component {
    toCard(item, idx) {
        return (
            <Card bg="light">
                <Card.Body>
                    {item}
                </Card.Body>
            </Card >
        );
    }

    render() {
        let arr = this.props.arr !== undefined ? this.props.arr.slice(0) : []
        let rows = this.props.rows !== undefined ? this.props.rows : 0
        let cols = this.props.cols !== undefined ? this.props.cols : 0

        return <ArrayGrid arr={arr.map(this.toCard, this)} rows={rows} cols={cols} />
    }
};

export default cardGrid;