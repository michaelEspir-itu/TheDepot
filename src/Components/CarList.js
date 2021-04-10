import React from 'react';
import carsApi from '../rest/CarsApi';
import Car from '../Components/Car.js';
import {NewCarForm} from './NewCarForm';

// this is where the functions work so they can process the information given to them.

export  default class Carlist extends React.Component {
    constructor(props){
        super(props);
    this.state = {
        cars:[]
    }
    
}

    componentDidMount(){
        this.fetchCars();
    }

    fetchCars = async() => {
        const cars = await carsApi.getAll();
        this.setState({cars});
    };

    updateCars = async(car) => {
        console.log('Got to updateCars!');
        await carsApi.update(car);
        this.fetchCars();
    }

    deleteCar = async(car_id) => {
            await carsApi.delete(car_id);
            this.fetchCars();
    }

    addNewCar = async(car) => {
        console.log('newCarData', car);
        await carsApi.create(car);
        await this.fetchCars();
    }
    updateCar = async(existingCarData) =>{
        console.log('existingCarData', existingCarData);
        await carsApi.update(existingCarData);
        this.fetchCars();
    }

    render (){
        const cars = this.state.cars.map((car, key) =>
                    <Car key = {key} model = {car.model}
                                     brand = {car.brand}
                                     year= {car.year}
                                     miles= {car.miles}
                                     price= {car.price}
                                     _id = {car._id}
                                updateCars={this.updateCars}
                                deleteCar={this.deleteCar}
                                updateCar={this.updateCar}
                />
                )
                return(
                <div>
                    <h4>Car List</h4>
                    {cars}
                <NewCarForm addNewCar={this.addNewCar}/>
                <br/>
            </div>
        )
    };
}

