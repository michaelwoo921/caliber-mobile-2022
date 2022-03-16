import {
  createStore,
  combineReducers,
  applyMiddleware,
  Store,
  Reducer,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AppAction } from './actions';
import thunk from 'redux-thunk';
import Batch from '../batches/Batch';
import QcWeek from '../batchWeek/QcWeek';
import WeekCategory from '../weekCategories/WeekCategory';
import Category from '../categories/Category';
import { AssociateWithFeedback } from '../associate/Associate';
import { UserInfo, UserInput } from '../user/user';
import userReducer from './userReducer';
import categoryReducer from './categoryReducer';
import batchReducer from './batchReducer';
import weekReducer from './weekReducer';
import weekCategoryReducer from './weekCategoryReducer';

export interface BatchState {
  batch: Batch;
  batches: Batch[];
}

export interface WeekState {
  weeks: QcWeek[];
  selectedWeek: QcWeek;
}

export interface UserState {
  user: UserInfo;
  userLogin: UserInput;
}

export interface AssociateState {
  associates: AssociateWithFeedback[];
}

export interface WeekCategoryState {
  weekCategories: Category[];
  weekCategory: WeekCategory;
}

export interface CategoryState {
  activeCat: Category[];
  staleCat: Category[];
  render: boolean;
}

export interface CategoryState {
  categories: Category[];
}

export interface CaliberState
  extends UserState,
    CategoryState,
    AssociateState,
    BatchState,
    WeekState,
    WeekCategoryState {}

const rootReducer = combineReducers({
  userReducer,
  categoryReducer,
  batchReducer,
  weekReducer,
  weekCategoryReducer,
});
export type ReducerState = ReturnType<typeof rootReducer>;

const store: Store<ReducerState, AppAction> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
