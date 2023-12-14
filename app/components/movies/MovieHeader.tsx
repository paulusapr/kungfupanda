import React, { ReactNode, ReactElement } from "react";

export interface HeaderProps {
  title: string;
  icon?: ReactNode | ReactElement;
}

export const MovieHeader = (props: HeaderProps) => {
  const { title, icon } = props;

  return (
    <div className="header">
      {icon}
      <span>{title}</span>
    </div>
  );
};
