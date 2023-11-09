import { produce } from 'immer';
import { UPDATE_USER, CARD_MONTHLY_YEARLY } from './constants';

export const initialState = {
  info: {},
};

export const storedKey = ['info'];

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case UPDATE_USER:
        draft.info = { user: action.userInfo };
        break;

      case CARD_MONTHLY_YEARLY:
        draft.info = { ...state.info, plan: action.card };
        break;
    }
  });

export default homeReducer;
