import spain from '../../assets/spain.png'
import chevron from '../../assets/chevronDown.svg'

import styles from './languageSelector.module.scss'

const LanguageSelector = () => {
  return (
    <div className={styles.languageSelector}>
      <img src={spain} alt="es" />
      <img src={chevron} alt="v" />
    </div>
  )
}

export default LanguageSelector
