import {CHANGE_BACKGROUND} from './../types'

const initialState = {
    mode: 'lightMode'
  };
  
  export const darkModeReducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_BACKGROUND:
        return {
          ...state,
          mode: action.payload,
        };
    }
    return state;
  };