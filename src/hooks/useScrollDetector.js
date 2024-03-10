import { useEffect, useState } from 'react'

const useScrollDetector = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Verificar si la página ha sido desplazada más allá de cierta posición
      const scrollY = window.scrollY
      if (scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return isScrolled
}

export default useScrollDetector
