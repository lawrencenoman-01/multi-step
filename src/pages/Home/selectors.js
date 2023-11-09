import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomeState = (state) => state.home || initialState;

export const selectInfo = createSelector(selectHomeState, (state) => state.info);
