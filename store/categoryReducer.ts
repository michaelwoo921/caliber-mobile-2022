import { initialState } from './initialState';
import * as Actions from './actions';
import { CaliberState } from './store';
import Category from '../categories/Category';

const categoryReducer = (
  state: CaliberState = initialState,
  action: Actions.AppAction
): CaliberState => {
  const newState = { ...state };
  switch (action.type) {
    case Actions.CategoryActions.GetActive:
      newState.activeCat = action.payload as Category[];
      return newState;
    case Actions.CategoryActions.GetStale:
      newState.staleCat = action.payload as Category[];
      return newState;
    case Actions.CategoryActions.GetRender:
      newState.render = action.payload as boolean;
      return newState;
    default:
      return state;
  }
};

export default categoryReducer;
