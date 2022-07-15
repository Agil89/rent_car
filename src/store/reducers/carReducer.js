import { LOAD_CARS } from "../types";

const initialState = {
  allCars: [],
};

export const carReducer = (state = initialState, action) => {
  // console.log('in the reducer');
  // console.log(action.payload);
  // console.log('--------');
  switch (action.type) {
    case LOAD_CARS:

      return {
        ...state,
        allCars: [...action.payload],
      };
  }
  return state;
};