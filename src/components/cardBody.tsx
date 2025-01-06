import { CardBodyProps } from "../types/types";
import { cn } from "../utils/cn";

function CardBody({ children, className }: CardBodyProps) {
  return (
    <div
      className={cn(
        "[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
}

export default CardBody;
