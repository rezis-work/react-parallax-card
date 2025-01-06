export interface CardContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export interface CardBodyProps {
  children?: React.ReactNode;
  className?: string;
}

export interface CardItemProps {
  component?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  translateZ?: number | string;
  [key: string]: unknown;
}
