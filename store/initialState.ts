import { CaliberState, UserState } from './store';
import { UserInfo, UserInput } from '../user/user';
import Batch from '../batches/Batch';
import QcWeek from '../batchWeek/QcWeek';
import WeekCategory from '../weekCategories/WeekCategory';

export const initialState: CaliberState = {
  user: new UserInfo(),
  userLogin: new UserInput(),
  associates: [],
  batches: [],
  weeks: [],
  batch: new Batch(),
  selectedWeek: new QcWeek(),
  weekCategories: [],
  weekCategory: new WeekCategory(),
  categories: [],
  activeCat: [],
  staleCat: [],
  render: true,
};
