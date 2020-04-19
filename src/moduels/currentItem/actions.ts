import { createAction } from "typesafe-actions";
import { Item } from "./interface";

export const GET_CURRENT_ITEM = "currentItem/GET_CURRENT_ITEM";
export const getCurrentItem = createAction(GET_CURRENT_ITEM)<Item>();

export const SELECT_CURRENT_ITEM = "currentItem/SELECT_CURRENT_ITEM";
export const selectCurrentItem = createAction(SELECT_CURRENT_ITEM)<Item>();
