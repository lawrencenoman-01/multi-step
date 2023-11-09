/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { FormattedMessage } from 'react-intl';

import { ping } from '@containers/App/actions';

import Sidebar from '@components/Sidebar';
import PersonalInfo from '@components/Info';
import MonthlyPlan from '@components/Plans';
import AddOns from '@components/Add-Ons';

import styles from './style.module.scss';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  const [active, setActive] = useState('PersonalInfo');
  const goNext = () => {
    const nextComponent = {
      PersonalInfo: 'Plan',
      Plan: 'AddOns',
      AddOns: 'Summary',
    };

    setActive(nextComponent[active]);
  };

  const goToPlan = () => {
    setActive('Plan');
  };

  const goToPrev = () => {
    const prevComponent = {
      Plan: 'PersonalInfo',
      AddOns: 'Plan',
      Summary: 'AddOns',
    };

    setActive(prevComponent[active]);
  };

  const renderComponent = () => {
    switch (active) {
      case 'PersonalInfo':
        return <PersonalInfo goToNext={() => setActive('Plan')} />;
      case 'Plan':
        return <MonthlyPlan goToNext={() => setActive('AddOns')} goBack={() => setActive('PersonalInfo')} />;
      case 'AddOns':
        return <AddOns goToNext={() => setActive('PersonalInfo')} goBack={() => setActive('Plan')} />;
      default:
        return <PersonalInfo goToNext={() => setActive('Plan')} />;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__card}>
        <Sidebar />
        <div className={styles.container__card__info}>{renderComponent()}</div>
      </div>
    </div>
  );
};

export default Home;
