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

    updateCars = async(updateCars) => {
        console.log('Got to updateCars!');
        await carsApi.post(updateCars);
        this.fetchCars();
    }

    removeCar = async(car_id) => {
            await carsApi.delete(car_id);
            this.fetchCars();
    }

    addNewCar = (car, model) => {
        console.log('car', car);
        console.log('model',model);
        this.updateCars({...car});
    }
    updateCar = async(existingCarData,car_id) =>{
        console.log('existingCarData', existingCarData);
        console.log('car_id', car_id);
        await carsApi.update(existingCarData,car_id);
        this.fetchCars();
    }

    render (){
        console.log(this.state.cars);
        return (
            <div>
                <h1>Car List</h1>
                {this.state.cars.map((car) =>(
                    <Car model={car}
                                updateCars={this.updateCars}
                                removeCar={this.removeCar}
                                updateCar={this.updateCar}
                />
                ))
                }
                <NewCarForm addNewCar={this.addNewCar}/>
                <br/>
            </div>
        )
    };
}

export default Carlist;

