/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './back.module.scss';

const ButtonBack = ({ goBack }) => {
  return (
    <div className={styles.button}>
      <button onClick={goBack} className={styles.button__style}>
        <FormattedMessage id="app_title_button2" />
      </button>
    </div>
  );
};

export default ButtonBack;
