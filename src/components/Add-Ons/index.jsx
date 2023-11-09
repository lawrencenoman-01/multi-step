/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';

import { FormattedMessage } from 'react-intl';

import { CheckBox } from '@mui/icons-material';

import ButtonNext from '@components/ButtonNext';
import ButtonBack from '@components/ButtonBack';

import styles from './add.module.scss';

const AddOns = ({ goToNext, goBack }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.container__content__title}>
          <FormattedMessage id="app_step3_main_title" />
        </div>
        <div className={styles.container__content__description}>
          <FormattedMessage id="app_step3_description" />
        </div>
      </div>
      <div className={styles.container__card}>
        {/* Cards 1 */}
        <div className={styles.container__card__content}>
          <div className={styles.cards}>
            <div className={styles.cards__checkbox}>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleChange}
                />
                <span className="custom-checkbox"></span>
              </label>
            </div>
            <div className={styles.cards__content}>
              <div className={styles.title}>
                <FormattedMessage id="app_step3_add_title" />
              </div>
              <div className={styles.description}>
                <FormattedMessage id="app_step3_add_description" />
              </div>
            </div>
            <div className={styles.cards__price}>
              <FormattedMessage id="app_step3_add_price" />
            </div>
          </div>
        </div>
        {/* Cards 2 */}
        <div className={styles.container__card__content}>
          <div className={styles.cards}>
            <div className={styles.cards__checkbox}>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleChange}
                />
                <span className="custom-checkbox"></span>
              </label>
            </div>
            <div className={styles.cards__content}>
              <div className={styles.title}>
                <FormattedMessage id="app_step3_add_title2" />
              </div>
              <div className={styles.description}>
                <FormattedMessage id="app_step3_add_description2" />
              </div>
            </div>
            <div className={styles.cards__price}>
              <FormattedMessage id="app_step3_add_price2" />
            </div>
          </div>
        </div>
        {/* Cards 3 */}
        <div className={styles.container__card__content}>
          <div className={styles.cards}>
            <div className={styles.cards__checkbox}>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleChange}
                />
                <span className="custom-checkbox"></span>
              </label>
            </div>
            <div className={styles.cards__content}>
              <div className={styles.title}>
                <FormattedMessage id="app_step3_add_title3" />
              </div>
              <div className={styles.description}>
                <FormattedMessage id="app_step3_add_description3" />
              </div>
            </div>
            <div className={styles.cards__price}>
              <FormattedMessage id="app_step3_add_price3" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.colButton}>
        <ButtonBack goBack={goBack} />
        <ButtonNext goToNext={goToNext} />
      </div>
    </div>
  );
};

export default AddOns;
