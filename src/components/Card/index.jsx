/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';

import ButtonBack from '@components/ButtonBack';
import ButtonNext from '@components/ButtonNext';

import { cardPayment } from '@pages/Home/actions';
import styles from './card.module.scss';

const CardY = ({goToNext, goToBack}) => {
  const [isYearly, setIsYearly] = useState(false)
  const [cardPicker, setCardPicker] = useState("")
  const [selectPlan, setSelectPlan] = useState({})

  const dispath = useDispatch()
  const handlePlanCard = (planCard) => {
    const isYearlyPrice = isYearly;
    let yearly = '';
    
    if (isYearlyPrice) {
      yearly = 'Yearly'
    } else {
      yearly = 'Monthly'
    }

    let priceCategory = '';

    switch (planCard) {
      case 'Arcade':
        priceCategory = isYearlyPrice ? '$90/yr' : '$9/mo';
      break;

      case 'Advanced':
        priceCategory = isYearlyPrice ? '$120/yr' : '$12/mo';
      break;

      case 'Pro':
        priceCategory = isYearlyPrice ? '$150/yr' : '$15/mo';
      break;

      default:
      break;
    }

    const selectedPlan = {
      name: planCard,
      price: priceCategory,
      time: yearly,
    }

    setSelectPlan(selectedPlan)
  }
  
  const handlePlanNext = (e) => {
    e.preventDefault()
    dispath(cardPayment(selectPlan))
    goToNext()
  }

  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <div className={cardPicker === 'arcade' ? `${styles.home__container__card} ${styles.home__container__card_active}` : styles.home__container__card} onClick={() => {setCardPicker('arcade'); handlePlanCard('Arcade');}}>
          <div className={styles.home__container__card__content}>
            <img src="/icon-arcade.svg" alt="icon plan" />
            <div className={styles.home__container__card__content__title}>
              <FormattedMessage id="app_step2_plan_title1" />
            </div>
            <div className={styles.home__container__card__content__price}>
              <FormattedMessage id={isYearly ? "app_step2_plan_price_year" : "app_step2_plan_price_month"} />
            </div>
            {isYearly ? <div className={styles.home__container__card__content__free}>
              <FormattedMessage id="app_step2_plan_price_free" />
            </div> : ""}
          </div>
        </div>
        <div className={cardPicker === 'advanced' ? `${styles.home__container__card} ${styles.home__container__card_active}` : styles.home__container__card} onClick={() => {setCardPicker('advanced'); handlePlanCard('Advanced');}} >
          <div className={styles.home__container__card__content}>
            <img src="/icon-advanced.svg" alt="icon plan" />
            <div className={styles.home__container__card__content__title}>
              <FormattedMessage id="app_step2_plan_title2" />
            </div>
            <div className={styles.home__container__card__content__price}>
              <FormattedMessage id={isYearly ? "app_step2_plan_price2_year" : "app_step2_plan_price2_month"} />
            </div>
            {isYearly ? <div className={styles.home__container__card__content__free}>
              <FormattedMessage id="app_step2_plan_price_free" />
            </div> : ""}
          </div>
        </div>
        <div className={cardPicker === 'pro' ? `${styles.home__container__card} ${styles.home__container__card_active}` : styles.home__container__card} onClick={() => {setCardPicker('pro'); handlePlanCard('Pro');}}>
          <div className={styles.home__container__card__content}>
            <img src="/icon-pro.svg" alt="icon plan" />
            <div className={styles.home__container__card__content__title}>
              <FormattedMessage id="app_step2_plan_title3" />
            </div>
            <div className={styles.home__container__card__content__price}>
              <FormattedMessage id={isYearly ? "app_step2_plan_price3_year" : "app_step2_plan_price3_month"} />
            </div>
            {isYearly ? <div className={styles.home__container__card__content__free}>
              <FormattedMessage id="app_step2_plan_price_free" />
            </div> : ""}
          </div>
        </div>
      </div>
      <div className={styles.home__slider}>
        <div className={isYearly ? styles.titleMontly : `${styles.titleMontly} ${styles.titleMontly_active}`}>
          <FormattedMessage id="app_step2_plan_slider1" />
        </div>
        <label className={styles.toggle}>
          <input id="monthly" name="toggle" type="radio" checked={!isYearly} onChange={() => setIsYearly(false)} />
          <label htmlFor="monthly"></label>

          <input id="yearly" name="toggle" type="radio" checked={isYearly} onChange={() => setIsYearly(true)} />
          <label htmlFor="yearly"></label>
        </label>
        <div className={!isYearly ? styles.titleYearly : `${styles.titleYearly} ${styles.titleYearly_active}`}>
          <FormattedMessage id="app_step2_plan_slider2" />
        </div>
      </div>
      <div className={styles.colButton}>
        <ButtonBack goBack={goToBack} />
        <ButtonNext goToNext={handlePlanNext} />
      </div>
    </div>
  );
};

export default CardY;
