import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FaExpandArrowsAlt, FaCompressArrowsAlt } from "react-icons/fa";
import ArrayGrid from './arrayGrid'

class cardGrid extends React.Component {
    state = {
        maximised: null
    }

    maximiseCard(idx) {
        this.setState({ maximised: idx })
    }

    unmaximiseCards() {
        this.setState({ maximised: null })
    }

    toCard(item, idx) {
        var maximised = this.state.maximised !== null;
        return (
            <Card bg="light">
                <Card.Header>
                    <Button onClick={() => maximised ? this.unmaximiseCards() : this.maximiseCard(idx)}>
                        {maximised ? <FaCompressArrowsAlt /> : <FaExpandArrowsAlt />}
                    </Button>
                </Card.Header>
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

        if (this.state.maximised !== null && arr.length >= this.state.maximised) {
            arr = arr.slice(this.state.maximised, this.state.maximised + 1)
        }

        return <ArrayGrid arr={arr.map(this.toCard, this)} rows={rows} cols={cols} />
    }
};

export default cardGrid;