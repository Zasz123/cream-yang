import { createReducer } from "typesafe-actions";
import { CurrentItemState } from "./interface";
import { CurrentItemAction } from "./types";
import { GET_CURRENT_ITEM, SELECT_CURRENT_ITEM } from "./actions";

const initialState: CurrentItemState = {
  item: null,
};

const currentItem = createReducer<CurrentItemState, CurrentItemAction>(
  initialState,
  {
    [GET_CURRENT_ITEM]: (state, { payload: item }) => {
      return {
        item,
      };
    },
    [SELECT_CURRENT_ITEM]: (state, { payload: item }) => {
      return {
        ...state,
        item: {
          id: item.id,
          name: item.name,
          info: item.info,
          tag: item.tag,
          src: item.src,
          beforeVideo: item.beforeVideo,
          profile: item.profile,
        },
      };
    },
  }
);

export default currentItem;
