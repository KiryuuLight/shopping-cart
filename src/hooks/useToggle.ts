import { useState } from 'react';

function useToggle() {
  const [toggle, setToggle] = useState(false);

  const toggleItem = () => setToggle((prev) => !prev);

  return { toggle, toggleItem };
}

export default useToggle;
