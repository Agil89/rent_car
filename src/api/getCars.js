import { useDispatch } from 'react-redux'
 
export const getCars = async () =>{
    const response = await fetch('http://10.0.2.2:8000/get_cars/',{
        method:'GET',
        headers:{
            'Accept': 'application/json',
            'Content-Type':'application/json'
        }
    })
    const data = await response.json()
    return data.cars
}