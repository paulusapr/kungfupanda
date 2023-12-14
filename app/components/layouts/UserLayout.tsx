import React, { ReactElement, ReactNode } from "react";

interface UserLayoutProps {
  children: ReactElement | ReactNode;
}

export const UserLayout = (props: UserLayoutProps) => {
  const { children } = props;

  return (
    <div className="root-container">
      <div className="container-content">{children}</div>
    </div>
  );
};
