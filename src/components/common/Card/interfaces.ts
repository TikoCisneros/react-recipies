import React from 'react';

export interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

export interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export interface CardHOCProps {
  ({ children, className }: CardProps): JSX.Element;
  Body: ({ children, className }: CardProps) => JSX.Element;
  Image: ({ src, alt, className }: CardImageProps) => JSX.Element;
  Actions: ({ children, className }: CardProps) => JSX.Element; 
}