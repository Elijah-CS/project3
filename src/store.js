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
    case Action.AddExpense:
      return {
        ...state,
        expenses: [action.payload, ...state.expenses],
      };
    case Action.ClearState:
      return {
        ...state,
        expenses: [],
      };
    case Action.LoadID:
      return {
        ...state,
        expense: action.payload[0],
      };
    case Action.DeleteID:
      return {
        ...state,
        expenses: state.expenses.filter(item => item.id !== action.payload),
      };
    case Action.UpdateID:
      return {
        ...state,

        expenses: state.expenses.map( item => {
          if (item.id === action.payload.id) {
            return action.payload;
          } else {
            return item;
          }
        })
      };
    case Action.ChangeMessage:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
}

const initialState = {
  expenses: [],
  net: [],
  expense: [],
  message: '',
};

export const store = createStore(reducer, initialState, applyMiddleware(thunk));
