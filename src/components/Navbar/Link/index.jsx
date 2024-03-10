import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types'
import { useRef } from "react";

const Link = ({ href, text, mainLinks, secondaryLinks, onCloseLinks, styles, visible }) => {
  let { pathname } = useLocation()
  const linkRef = useRef(null)


  return (
    <div className={styles.linkContainer} ref={linkRef}>
      <a
        className={`${styles.link} ${pathname === href ? styles.active : ''} ${!visible ? styles.hide : ''}`}
        href={href}
        onClick={onCloseLinks}
      >
        {text}
      </a>
      {(!!mainLinks?.length || !!secondaryLinks?.length) &&
        <div className={styles.subLinks}>
          {!!mainLinks?.length &&
            <div className={styles.mainLinks}>
              {mainLinks.map(({ text, href }, mainLinkIdx) =>
                <a
                  key={mainLinkIdx}
                  className={`${styles.link} ${styles.subLink}`}
                  href={href}
                  onClick={onCloseLinks}
                >
                  {text}
                </a>
              )}
            </div>
          }
          {!!secondaryLinks?.length &&
            <div className={styles.secondaryLinks}>
              {secondaryLinks.map(({ text, href }, secondaryLinkIdx) =>
                <a
                  key={secondaryLinkIdx}
                  className={`${styles.link} ${styles.subLink}`}
                  href={href}
                  onClick={onCloseLinks}
                >
                  {text}
                </a>
              )}
            </div>
          }
        </div>
      }
    </div>
  )
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  mainLinks: PropTypes.array,
  secondaryLinks: PropTypes.array,
  onCloseLinks: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
}

export default Link;