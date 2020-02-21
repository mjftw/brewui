import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class arrayGrid extends React.Component {
    render() {
        let arr = this.props.arr !== undefined ? this.props.arr.slice(0) : []
        let rows = this.props.rows !== undefined ? this.props.rows : 0
        let cols = this.props.cols !== undefined ? this.props.cols : 0
        let arr2d = [];

        for (let i = 0; i < rows && arr.length; i++) {
            arr2d.push(arr.splice(0, cols))
        }
        return (
            <Container>
                {
                    arr2d.map((row, ridx) => {
                        return <Row key={ridx}>{row.map((col, cidx, carr) => {
                            return <Col key={ridx * carr.length + cidx}> {col}</Col>
                        }
                        )}</Row>
                    })
                }
            </Container >
        );
    }
};

export default arrayGrid;