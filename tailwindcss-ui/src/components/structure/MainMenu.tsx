import { MenuLink } from "./MenuLink";
export type MenuLinks = {
  url: string;
  urlText: string;
};

export type MenuProps = {
  menuItems: Array<MenuLinks>;
  mobileMenuOpen?: boolean;
};

export type MobileMenuProps = {
  mobileMenuAction: any;
  mobileMenuOpen: boolean;
};

export const MainMenu = ({ menuItems }: MenuProps) => {
  return (
    <nav className="mt-4 hidden md:flex md:flex-wrap">
      {menuItems.map((menuItem) => (
        <MenuLink
          url={menuItem.url}
          linkStyle="px-8 text-xl uppercase flex-shrink-0"
          key={menuItem.urlText}
        >
          {menuItem.urlText}
        </MenuLink>
      ))}
    </nav>
  );
};
