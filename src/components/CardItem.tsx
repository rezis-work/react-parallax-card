import { CardItemProps } from "../types/types";

function CardItem({
  component: Component = "div",
  children,
  className,
  ...rest
}: CardItemProps) {
  return (
    <Component className={className} {...rest}>
      {children}
    </Component>
  );
}

export default CardItem;
