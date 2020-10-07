import { useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
export default function useOutsideAlerter(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (event.target.className.includes('Hamburger')) {
          console.log('HamburGER CLICKED MAN');
        } else {
          callback(0);
        }
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}
