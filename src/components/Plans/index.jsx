/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */
import { FormattedMessage } from 'react-intl';

import CardY from '@components/Card';
import ButtonNext from '@components/ButtonNext';
import ButtonBack from '@components/ButtonBack';

import styles from './monthly.module.scss';

const MonthlyPlan = ({ goToNext, goBack }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        <FormattedMessage id="app_step2_main_title" />
      </div>
      <div className={styles.container__description}>
        <FormattedMessage id="app_step2_description" />
      </div>
      <CardY goToBack={goBack} goToNext={goToNext} />
      {/* <div className={styles.colButton}>
        <ButtonBack goBack={goBack} />
        <ButtonNext goToNext={goToNext} />
      </div> */}
    </div>
  );
};

export default MonthlyPlan;
