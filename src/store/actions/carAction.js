import { getCars } from "../../api/getCars"
import { LOAD_CARS } from "../types"



export const loadCars = () =>{
    return async dispatch =>{
        const cars = await getCars()
        // console.log('in the action');
        // console.log(cars);
        // console.log('-------');
        dispatch({
            type: LOAD_CARS,
            payload: cars
        })
    }
}