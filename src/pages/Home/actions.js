/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import { UPDATE_USER, CARD_MONTHLY_YEARLY } from './constants';

export const updateUser = (userInfo) => ({
  type: UPDATE_USER,
  userInfo,
});

export const cardPayment = (card) => ({
  type: CARD_MONTHLY_YEARLY,
  card,
});
