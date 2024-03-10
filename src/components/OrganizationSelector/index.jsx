import chevron from '../../assets/chevronDown.svg'

import styles from './organizationSelector.module.scss';

const OrganizationSelector = () => {
  return (
    <div className={styles.organizationSelector}>
      Company SL
      <img src={chevron} alt="v" />
    </div>
  )
}


export default OrganizationSelector
