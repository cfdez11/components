import { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

import Button from '../Button'
import GlobalSearch from '../GlobalSearch'
import OrganizationSelector from '../OrganizationSelector'
import User from '../User'
import useScrollDetector from '../../hooks/useScrollDetector'
import useOverflowItems from '../../hooks/useOverflowItems'
import useScreenSize from '../../hooks/useScreenSize'
import { SCREEN_MD } from '../../utils/constants'
import { INDEX_URL } from '../../utils/urls'
import LINKS from '../../utils/links'

import menu from '../../assets/menu.svg'
import off from '../../assets/off.svg'
import react from '../../assets/react.svg'
import chevron from '../../assets/chevronDown.svg'

import styles from './navbar.module.scss'

const COMPANY_NAME = 'Company'

const Navbar = ({ defaultDark = false }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedLink, setSelectedLink] = useState({});

  let { pathname } = useLocation()
  const linksRef = useRef(null)
  const { width: windowWidth } = useScreenSize()
  const isMobile = windowWidth <= SCREEN_MD
  const isPageScrolled = useScrollDetector()
  const { areOverflow, overflowItems } = useOverflowItems({ ref: linksRef, childClassName: styles.linkContainer })

  const linksOverflowed = overflowItems.map((item) => item.children?.[0]?.href?.replace(window.location.origin, ''))
  const visibleLinks = LINKS.map((link) => ({ ...link, visible: !linksOverflowed.includes(link.href) }));
  const overflowLinks = visibleLinks.filter((link) => !link.visible);

  const onClickExpand = () => setIsExpanded(!isExpanded)

  const onClickLink = (link) => {
    if (!link.hasSubLinks) {
      setIsExpanded(false)
    } else if (isMobile) {
      setSelectedLink(link)
    }
  }

  return (
    <header className={`${styles.navbar} ${isPageScrolled || defaultDark ? styles.isScrolled : ''} ${!isExpanded ? styles.isClosed : ''}`}>
      <div className={styles.linksContainer}>
        <div className={styles.mainLinks}>
          <a className={styles.link} href={INDEX_URL} onClick={onClickLink} aria-label={COMPANY_NAME}>
            <img src={react} alt={COMPANY_NAME} />
          </a>
          <Button onClick={onClickExpand} className={styles.expandButton}>
            <img src={menu} alt="Menu" />
          </Button>
        </div>
        <div className={styles.restLinks}>
          <nav className={`${styles.links} ${areOverflow ? styles.areOverflow : ''}`} ref={linksRef}>
            <div className={styles.visibleLinks} >
              {visibleLinks.map((link, linkIdx) =>
                <div className={`${styles.linkContainer} ${!link.visible ? styles.hide : ''}`} key={linkIdx}>
                  <a
                    className={`${styles.link} ${pathname === link.href ? styles.active : ''}`}
                    href={(!isMobile || !link.hasSubLinks) ? link.href : null}
                    onClick={() => onClickLink(link)}
                  >
                    {link.text} {link.hasSubLinks && <img src={chevron} alt="" />}
                  </a>
                  {link.hasSubLinks &&
                    <div className={`${styles.subLinks} shadow`}>
                      {!!link.mainLinks?.length &&
                        <div className={styles.firstLinks}>
                          {link.mainLinks.map(({ text, href }, mainLinkIdx) =>
                            <a
                              key={mainLinkIdx}
                              className={`${styles.link} ${styles.subLink}`}
                              href={href}
                              onClick={onClickLink}
                            >
                              {text}
                            </a>
                          )}
                        </div>
                      }
                      {!!link.secondaryLinks?.length &&
                        <div className={styles.secondaryLinks}>
                          {link.secondaryLinks.map(({ text, href }, secondaryLinkIdx) =>
                            <a
                              key={secondaryLinkIdx}
                              className={`${styles.link} ${styles.subLink}`}
                              href={href}
                              onClick={onClickLink}
                            >
                              {text}
                            </a>
                          )}
                        </div>
                      }
                    </div>
                  }
                </div>
              )}
            </div>
          </nav>
          {areOverflow &&
            <nav className={styles.overflowLinksContainer}>
              <Button className={styles.showOverflowLinks}>
                <img src={chevron} alt='v' />
              </Button>
              <div className={`${styles.overflowLinks} shadow`}>
                {overflowLinks.map(({ href, text, mainLinks, secondaryLinks, hasSubLinks }, linkIdx) =>
                  <div className={`${styles.linkContainer}`} key={linkIdx}>
                    <a
                      className={`${styles.link} ${pathname === href ? styles.active : ''}`}
                      href={href}
                      onClick={onClickLink}
                    >
                      {text} {hasSubLinks && <img src={chevron} alt="" />}
                    </a>
                    {hasSubLinks &&
                      <div className={`${styles.subLinks} shadow`}>
                        {!!mainLinks?.length &&
                          <div className={styles.firstLinks}>
                            {mainLinks.map(({ text, href }, mainLinkIdx) =>
                              <a
                                key={mainLinkIdx}
                                className={`${styles.link} ${styles.subLink}`}
                                href={href}
                                onClick={onClickLink}
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
                                onClick={onClickLink}
                              >
                                {text}
                              </a>
                            )}
                          </div>
                        }
                      </div>
                    }
                  </div>
                )}
              </div>
            </nav>
          }
          <nav className={styles.extraLinks}>
            <GlobalSearch />
            <OrganizationSelector />
            <User />
            <Button className={styles.closeSession}>
              Cerrar sesión <img src={off} alt="" />
            </Button>
          </nav>
          <nav className={`${styles.mobileSubMenu} ${!selectedLink.hasSubLinks ? styles.hide : ''}`}>
            <div className={`${styles.subLinks} shadow`}>
              {!!selectedLink?.mainLinks?.length &&
                <div className={styles.firstLinks}>
                  {selectedLink.mainLinks.map(({ text, href }, mainLinkIdx) =>
                    <a
                      key={mainLinkIdx}
                      className={`${styles.link} ${styles.subLink}`}
                      href={href}
                      onClick={onClickLink}
                    >
                      {text}
                    </a>
                  )}
                </div>
              }
              {!!selectedLink?.secondaryLinks?.length &&
                <div className={styles.secondaryLinks}>
                  {selectedLink.secondaryLinks.map(({ text, href }, secondaryLinkIdx) =>
                    <a
                      key={secondaryLinkIdx}
                      className={`${styles.link} ${styles.subLink}`}
                      href={href}
                      onClick={onClickLink}
                    >
                      {text}
                    </a>
                  )}
                </div>
              }
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

Navbar.propTypes = {
  defaultDark: PropTypes.bool
}

export default Navbar
