// import {combineReducers} from 'redux';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const UPDATE_NAME = 'UPDATE_NAME';

const initialState = {
    court1: {
      TeamA:{
        Name: 'Bobby / Mike',
        Points: 15,
      },
      TeamB:{
        Name: 'Adam / Jon',
        Points: 16
      }
    },
    court2: {
      TeamA:{
        Name: 'test',
        Points: 0,
      },
      TeamB:{
        Name: 'Test',
        Points: 0
      }
    },
    court3: {
      TeamA:{
        Name: 'test',
        Points: 0,
      },
      TeamB:{
        Name: 'Test',
        Points: 0
      }
    },
};

export default function reducer(state = initialState, action) {
    var newState = Object.assign({}, state);
    var {court, team, value} = action;
    switch (action.type) {
        case INCREMENT:
          // var newState = Object.assign({}, state);
          newState[court][team].Points ++
          return newState;

        case DECREMENT:
          newState[court][team].Points --
          return newState;

        case RESET:
          newState[court].TeamA.Points = 0;
          newState[court].TeamB.Points = 0;
          return newState

        case UPDATE_NAME:
          newState[court][team].Name = value;
          return newState;

        default:
          return state;
    }
}

export function increment(court,team){
  return {
      type: INCREMENT,
      court,
      team,
  };
}
export function decrement(court,team){
  return {
      type: DECREMENT,
      court,
      team,
  };
}
export function reset(court){
  return {
      type: RESET,
      court,
  };
}
export function updateName(court, team, value){
  return {
      type: UPDATE_NAME,
      court, team, value
  };
}

/*
function genRand(min, max, decimalPlaces) {
    var rand = Math.random()*(max-min) + min;
    var power = Math.pow(10, decimalPlaces);
    return Math.floor(rand*power) / power;
}
*/

/******************************
Selectors
******************************/
export const getAllLeads = (state) => state.Lead.leads
