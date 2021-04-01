import React, {useState} from 'react';
import carsApi from '../rest/CarsApi';

export const UpdateCarForm = (props) =>{
	const [notes, setName] = useState('');

	const onSubmit = async (event) => {
		event.preventDefault();
		console.log('notes', notes);
		console.log('setName', setName);
		if(notes){
		
			console.log('props', props);
			console.log('props.car_id is: ' + props.car_id);
			const existingCarData = await carsApi.getSingle(props.car_id);
			console.log(' Need to figure out how to merge the next two lines');
			console.log('existingCarData', existingCarData);
			console.log('notes', notes);
			existingCarData.notes = notes;
			console.log('existingCarData', existingCarData);
			props.updateCar(existingCarData, props.car_id);
			setName('');
		}
		else{
			console.log('invalid input');
		}
	};

	return (
		<div>
			<br />	
			<h6> Update Car Form </h6>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='Add Notes on Car'
					onChange={(event) => setName(event.target.value)}
					value={notes}
				/>
			<button type='submit'>Update</button>
			</form>
		</div>
	);
};