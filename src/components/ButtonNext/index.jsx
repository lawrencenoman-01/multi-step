/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import { FormattedMessage } from 'react-intl';

import styles from './next.module.scss';

const ButtonNext = ({ goToNext }) => {
  return (
    <div className={styles.button}>
      <button onClick={goToNext} className={styles.button__style}>
        <FormattedMessage id="app_title_button" />
      </button>
    </div>
  );
};

export default ButtonNext;
