import search from '../../assets/search.svg'

import styles from './globalSearch.module.scss';

const GlobalSearch = () => {
  return (
    <div className={styles.globalSearch}>
      <img src={search} alt="v" />
    </div>
  )
}


export default GlobalSearch
