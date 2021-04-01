import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {UpdateCarForm} from './UpdateCarForm';

export default class Car extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.updateCar = this.updateCar.bind(this);
    }

    handleDeleteClick() {
        this.props.deleteCar(this.props._id);
    }

    updateCar(car) {
        this.props.updateCar(car);
    }

    render() {
        return (
            <div>
                <Card>
                <Card.Body>
                    <Card.Title>{this.props.model} {this.props.brand}</Card.Title>
                    <Card.Text> Year:{this.props.year} <br/> {this.props.miles} miles<br/>
              ${this.props.price} dollars</Card.Text>
                    <h6>Edit Car Details</h6>
                    <UpdateCarForm {...this.props} updateCar={this.props.updateCar} />
                </Card.Body>
                    <Button variant="danger" onClick={this.handleDeleteClick}>Delete</Button><br/>
                
                    </Card>
<br></br>            </div>
        
        );
    }
    }
