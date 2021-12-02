import * as React from "react";
import { Link } from "react-router-dom";
type MenuLinkProps = {
  url: string;
  linkStyle: string;
  children?: React.ReactNode;
};

export const MenuLink = ({ url, linkStyle, children }: MenuLinkProps) => {
  return (
    <Link to={url} className={linkStyle}>
      {children}
    </Link>
  );
};
