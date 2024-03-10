import avatar from '../../assets/avatar.png'

import styles from './user.module.scss';

const OrganizationSelector = () => {
  return (
    <div className={styles.user}>
      <div className={styles.info}>
        <span className={styles.fullName}>Pepe Admin Admin</span>
        <span className={styles.rol}>Administrador</span>
      </div>
      <img src={avatar} alt="v" />
    </div>
  )
}


export default OrganizationSelector
