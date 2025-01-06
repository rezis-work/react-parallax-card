import { useRef, useState } from "react";
import { MouseEnterContext } from "../context/MouseEnterContext";
import { CardContainerProps } from "../types/types";
import { cn } from "../utils/cn";

function CardContainer({ children, className }: CardContainerProps) {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const elRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsMouseEnter(true);
    if (!elRef.current) return;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!elRef.current) return;
    const { left, top, width, height } = elRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    elRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseLeave = () => {
    if (!elRef.current) return;
    setIsMouseEnter(false);
    elRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEnter, setIsMouseEnter]}>
      <div
        style={{
          perspective: "1000px",
        }}
        className="flex items-center justify-center py-20"
      >
        <div
          ref={elRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "relative flex items-center justify-center transition-all duration-200 ease-linear",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
}

export default CardContainer;
