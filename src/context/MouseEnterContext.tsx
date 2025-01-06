import { createContext, useContext } from "react";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context == undefined) {
    throw new Error("useMouseEnter must be used inside MouseEnterProvider");
  }

  return context;
};

export { MouseEnterContext, useMouseEnter };
