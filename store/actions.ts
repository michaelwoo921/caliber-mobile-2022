import Batch from '../batches/Batch';
import QcWeek from '../batchWeek/QcWeek';
import Category from '../categories/Category';
import WeekCategory from '../weekCategories/WeekCategory';
import { UserInfo, UserInput } from '../user/user';
import { AssociateWithFeedBack } from '../associate/Associate';

export enum BatchActions {
  GetBatches = 'GET_BATCHES',
  ChangeBatch = 'CHANGE_BATCH',
}

export enum WeekActions {
  GetWeeks = 'GET_WEEKS',
  ChangeSelectedWeek = 'CHANGE_SELECTED_WEEK',
  AddWeek = 'ADD_WEEK',
  AddNote = 'ADD_NOTE',
}

export enum UserActions {
  GetUser = 'GET_USER',
  LoginChange = 'CHANGE_LOGIN',
}

export enum WeekCategoryActions {
  DeleteWeekCategory = 'DELETE_WEEK_CATEGORY',
  AddWeekCategory = 'ADD_WEEK_CATETGORY',
  GetWeekCategories = 'GET_WEEK_CATEGORIES',
  CategoriesMenuOptions = 'CATEGORIES_MENU_OPTIONS',
}

export enum AssociateActions {
  GetAssociates = 'GET_ASSOCIATES',
}

export enum BatchWeekActions {
  GetWeek = 'GET_WEEK',
  NoteChange = 'CHANGE_NOTE',
}

export enum CategoryActions {
  GetActive = 'GET_ACTIVE',
  GetStale = 'GET_STALE',
  GetRender = 'GET_RENDER',
}

export interface AppAction {
  type: string;
  payload: any;
}

export interface BatchAction extends AppAction {
  type: BatchActions;
  payload: Batch[] | Batch;
}

export interface WeekAction extends AppAction {
  type: WeekActions;
  payload: QcWeek | QcWeek[];
}

export interface UserAction<P> extends AppAction {
  type: UserActions;
  payload: P;
}

export interface WeekCategoryAction extends AppAction {
  type: WeekCategoryActions;
  payload: WeekCategory | Category[];
}

export interface AssociateAction extends AppAction {
  type: AssociateActions;
  payload: AssociateWithFeedBack[];
}

export interface CategoryAction<P> extends AppAction {
  type: CategoryActions;
  payload: P | P[] | boolean;
}

export function getUser(user: UserInfo): UserAction<UserInfo> {
  return {
    type: UserActions.GetUser,
    payload: user,
  };
}

export function loginChange(user: UserInput): UserAction<UserInput> {
  return {
    type: UserActions.LoginChange,
    payload: user,
  };
}

export function getBatches(batches: Batch[]): BatchAction {
  return {
    type: BatchActions.GetBatches,
    payload: batches,
  };
}

export function changeBatch(batch: Batch): BatchAction {
  return {
    type: BatchActions.ChangeBatch,
    payload: batch,
  };
}

export function getWeeks(weeks: QcWeek[]): WeekAction {
  return {
    type: WeekActions.GetWeeks,
    payload: weeks,
  };
}

export function changeSelectedWeek(week: QcWeek): WeekAction {
  return {
    type: WeekActions.ChangeSelectedWeek,
    payload: week,
  };
}

export function addWeek(weeks: QcWeek[]): WeekAction {
  return {
    type: WeekActions.AddWeek,
    payload: weeks,
  };
}

export function addOverallNote(notes: QcWeek): WeekAction {
  return {
    type: WeekActions.ChangeSelectedWeek,
    payload: notes,
  };
}

export function deleteWeekCategory(category: WeekCategory): WeekCategoryAction {
  return {
    type: WeekCategoryActions.DeleteWeekCategory,
    payload: category,
  };
}

export function addWeekCategory(category: WeekCategory): WeekCategoryAction {
  return {
    type: WeekCategoryActions.AddWeekCategory,
    payload: category,
  };
}

export function getWeekCategories(categories: Category[]): WeekCategoryAction {
  return {
    type: WeekCategoryActions.GetWeekCategories,
    payload: categories,
  };
}

export function categoriesMenuOptions(
  categories: Category[]
): WeekCategoryAction {
  return {
    type: WeekCategoryActions.CategoriesMenuOptions,
    payload: categories,
  };
}

export function getAssociates(
  associates: AssociateWithFeedBack[]
): AssociateAction {
  return {
    type: AssociateActions.GetAssociates,
    payload: associates,
  };
}

export function getActive(categories: Category[]): CategoryAction<Category[]> {
  return {
    type: CategoryActions.GetActive,
    payload: categories,
  };
}

export function getStale(categories: Category[]): CategoryAction<Category[]> {
  return {
    type: CategoryActions.GetStale,
    payload: categories,
  };
}

export function getRender(b: boolean): CategoryAction<boolean> {
  return {
    type: CategoryActions.GetRender,
    payload: b,
  };
}
