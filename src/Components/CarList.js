import React from 'react';
import carsApi from '../rest/CarsApi';
import Car from '../Components/Car.js';
import {NewCarForm} from './NewCarForm';

export class Carlist extends React.Component {
    
    state = {
        cars:[]
    };

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
        console.log('car', car);
        await carsApi.create(car);
        await this.fetchCars();
    }
    updateCar = async(existingCarData,car_id) =>{
        console.log('existingCarData', existingCarData);
        console.log('car_id', car_id);
        await carsApi.update(existingCarData,car_id);
        this.fetchCars();
    }

    render (){
        console.log(this.state.cars);
        const cars = this.state.cars.map((car, key) =>
                    <Car key = {key} model = {car.model}
                                     brand = {car.brand}
                                     year= {car.year}
                                     miles= {car.miles}
                                     price= {car.price}
                                updateCars={this.updateCars}
                                removeCar={this.deleteCar}
                                updateCar={this.updateCar}
                />
                )
                return(
                <div>
                    <hi>Car List</hi>
                    {cars}
                <NewCarForm addNewCar={this.addNewCar}/>
                <br/>
            </div>
        )
    };
}

export default Carlist;

