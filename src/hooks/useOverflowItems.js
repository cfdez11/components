import { useState, useEffect } from 'react'
import useScreenSize from './useScreenSize'

const useOverflowItems = ({ ref, childClassName}) => {
  const [ overflowItems, setOverflowItems ] = useState([]);

  const { width: widthScreen } = useScreenSize();


  useEffect(() => {
    if(ref && ref.current) {
      const container = ref.current;
      const children = Array.from(container.querySelectorAll(`.${childClassName}`));
      const overflowed = children.filter(child => {
        const childRect = child.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        return (
          childRect.left  < containerRect.left ||
          childRect.right >= containerRect.right 
          // childRect.top <= containerRect.top ||
          // childRect.bottom >= containerRect.bottom
        );
      });
      
      setOverflowItems(overflowed);
    }
  }, [widthScreen, ref, childClassName])

  return {areOverflow: !!overflowItems?.length, overflowItems }
}

export default useOverflowItems
