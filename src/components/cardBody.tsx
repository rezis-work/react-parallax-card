import { CardBodyProps } from "../types/types";

function CardBody({ children, className }: CardBodyProps) {
  return <div className={className}>{children}</div>;
}

export default CardBody;
