import { useCallback, useEffect, useRef } from "react";
import { CardItemProps } from "../types/types";
import { useMouseEnter } from "../context/MouseEnterContext";
import { cn } from "../utils/cn";

function CardItem({
  component: Component = "div",
  children,
  className,
  translateZ = 0,
  ...rest
}: CardItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEnter] = useMouseEnter();

  const handleAnimations = useCallback(() => {
    if (!ref.current) return;

    if (isMouseEnter) {
      ref.current.style.transform = `translateZ(${translateZ}px)`;
    } else {
      ref.current.style.transform = `translateZ(0px)`;
    }
  }, [isMouseEnter, translateZ]);

  useEffect(() => {
    handleAnimations();
  }, [handleAnimations]);

  return (
    <Component
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default CardItem;
