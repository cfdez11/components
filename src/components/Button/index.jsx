import PropTypes from 'prop-types'
import styles from './button.module.scss'

export const BUTTON_TYPES = {
  primary: 'primary',
  primaryInverted: 'primaryInverted',
  transparent: 'transparent'
}

const Button = ({ className, children, color = BUTTON_TYPES.primary, isLink, ...rest }) => (
  isLink
    ? <a className={`${styles.button} ${className} ${styles[color]}`} {...rest}>{children}</a>
    : <button className={`${styles.button} ${className} ${styles[color]}`} {...rest}>{children}</button>
)

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  isLink: PropTypes.bool,
}

export default Button