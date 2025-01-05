import { CardContainerProps } from "../types/types";
import { cn } from "../utils/cn";

function CardContainer({ children, className }: CardContainerProps) {
  return (
    <div className="flex items-center justify-center py-20">
      <div className={cn("relative flex items-center", className)}>
        {children}
      </div>
    </div>
  );
}

export default CardContainer;
