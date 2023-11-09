/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import { FormattedMessage } from 'react-intl';
import styles from './sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__content}>
        <div className={styles.sidebar__content__step1}>
          <div className={styles.sidebar__content__step1__number}> 1 </div>
          <div className={styles.sidebar__content__step1__column}>
            <div className={styles.sidebar__content__step1__column__title}>
              <FormattedMessage id="app_step1" />
            </div>
            <div className={styles.sidebar__content__step1__column__description}>
              <FormattedMessage id="app_step1_title" />
            </div>
          </div>
        </div>
        <div></div>
      </div>
      {/* Content 2 */}
      <div className={styles.sidebar__content}>
        <div className={styles.sidebar__content__step1}>
          <div className={styles.sidebar__content__step1__number}> 2 </div>
          <div className={styles.sidebar__content__step1__column}>
            <div className={styles.sidebar__content__step1__column__title}>
              <FormattedMessage id="app_step2" />
            </div>
            <div className={styles.sidebar__content__step1__column__description}>
              <FormattedMessage id="app_step2_title" />
            </div>
          </div>
        </div>
        <div></div>
      </div>
      {/* Content 3 */}
      <div className={styles.sidebar__content}>
        <div className={styles.sidebar__content__step1}>
          <div className={styles.sidebar__content__step1__number}> 3 </div>
          <div className={styles.sidebar__content__step1__column}>
            <div className={styles.sidebar__content__step1__column__title}>
              <FormattedMessage id="app_step3" />
            </div>
            <div className={styles.sidebar__content__step1__column__description}>
              <FormattedMessage id="app_step3_title" />
            </div>
          </div>
        </div>
        <div></div>
      </div>
      {/* Content 4 */}
      <div className={styles.sidebar__content}>
        <div className={styles.sidebar__content__step1}>
          <div className={styles.sidebar__content__step1__number}> 4 </div>
          <div className={styles.sidebar__content__step1__column}>
            <div className={styles.sidebar__content__step1__column__title}>
              <FormattedMessage id="app_step4" />
            </div>
            <div className={styles.sidebar__content__step1__column__description}>
              <FormattedMessage id="app_step4_title" />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Sidebar;
