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
  [key: string]: unknown;
}
