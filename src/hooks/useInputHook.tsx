import { useState } from "react";

export function useInputHook(initialValue: any) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return [inputValue, handleChange];
}

export default useInputHook;
