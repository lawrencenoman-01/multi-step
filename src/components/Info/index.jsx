/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import ButtonNext from '@components/ButtonNext';
import { selectInfo } from '@pages/Home/selectors';
import { updateUser } from '@pages/Home/actions';
import styles from './info.module.scss';

const PersonalInfo = ({ goToNext }) => {
  const payment = useSelector(selectInfo);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: payment.user?.name || '',
    email: payment.user?.email || '',
    phone: payment.user?.phone || '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      phone: '',
    };

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!/^\+?[0-9]+$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(updateUser(formData));
      goToNext();
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.container__title}>
          <FormattedMessage id="app_step1_main_title" />
        </div>
        <div className={styles.container__description}>
          <FormattedMessage id="app_step1_description" />
        </div>
        <div className={styles.container__name}>
          <FormattedMessage id="app_step1_form_name" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="e.g. Stephen King"
            className={styles.container__name__form}
          />
          <span className={styles.errorText}>{errors.name}</span>
        </div>
        <div className={styles.container__email}>
          <FormattedMessage id="app_step1_form_email" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="e.g. stephenking@lorem.com"
            className={styles.container__name__form}
          />
          <span className={styles.errorText}>{errors.email}</span>
        </div>
        <div className={styles.container__phone}>
          <FormattedMessage id="app_step1_form_phone" />
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="e.g. +123 456 789"
            className={styles.container__name__form}
          />
          <span className={styles.errorText}>{errors.phone}</span>
        </div>
        <div className={styles.container__button}>
          <ButtonNext goToNext={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
