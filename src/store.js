import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Action } from './actions';

function reducer(state, action) {
  switch (action.type) {
    case Action.LoadExpenses:
      return {
        ...state,
        expenses: action.payload,
      };
    case Action.LoadNet:
      return {
        ...state,
        net: action.payload,
      }
    default:
      return state;
  }
}

const initialState = {
  expenses: [],
    // {
    //   id: 1,
    //   amount: 19.99,
    //   year: 2021,
    //   month: 11,
    //   day: 18,
    //   description: "Bought a movie ticket",
    //   updated: '1970-1-1',
    //   created: '1970-1-1',
    // },
  // ],
  net: [ 
    {
      total: 40.00
    } 
  ],
};

export const store = createStore(reducer, initialState, applyMiddleware(thunk));
