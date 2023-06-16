import { useState } from "react";

const useToggle = (state: boolean) => {
  const [toggle, setToggle] = useState(state);
  setToggle(!toggle);
  return { toggle };
};

export default useToggle;
