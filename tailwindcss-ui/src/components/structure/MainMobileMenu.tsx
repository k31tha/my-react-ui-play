import { MenuLink } from "./MenuLink";
import { MenuProps, MobileMenuProps } from "./MainMenu";

export const MainMobileMenu = ({ menuItems, mobileMenuOpen }: MenuProps) => {
  let menuOpenStyle = mobileMenuOpen === false ? "menu-closed" : "menu-opened";
  return (
    <div className={`mobile-menu ${menuOpenStyle}`}>
      {menuItems.map((menuItem) => (
        <MenuLink
          url={menuItem.url}
          linkStyle={"block py-2 px-4 text-xl hover:bg-gray-200 uppercase"}
          key={menuItem.urlText}
        >
          {menuItem.urlText}
        </MenuLink>
      ))}
    </div>
  );
};

export const MobileMenuButton = ({
  mobileMenuAction,
  mobileMenuOpen,
}: MobileMenuProps) => {
  let genericMobileMenuButtonStyle =
    "inline-flex items-center justify-center mobile-menu-button rounded-full p-1 w-14 h-14 border-2";
  let menoOpenClosedStyle = mobileMenuOpen ? " rotate-90" : "-rotate-0";
  let menoClosedStyle = "-rotate-45";
  let mobileMenuOpacity = mobileMenuOpen ? "opacity-0" : "opacity-100";
  let mobileMenuTop = mobileMenuOpen
    ? "transition  transform rotate-45 translate-y-5px origin-16-10"
    : "transition  transform-none origin-16-10";
  let mobileMenuBottom = mobileMenuOpen
    ? "transition ease transform -rotate-45 -translate-y-7px origin-16-22"
    : "transition ease transform-none origin-16-22";
  let mobileMenuClosed = mobileMenuOpen ? "opacity-0" : "opacity-100";
  //"mobile-menu-button transition ease transform duration-300 rotate-45"
  //className={`${genericMobileMenuButtonStyle}`}
  return (
    <div className="md:hidden block flex items-center justify-center">
      <button
        className={`${genericMobileMenuButtonStyle} `}
        onClick={mobileMenuAction}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="6"
            y="9"
            width="20"
            height="2"
            rx="1"
            fill="currentColor"
            transform-origin="16px 10px"
            className={`${mobileMenuTop}`}
          ></rect>
          <rect
            x="6"
            y="15"
            width="20"
            height="2"
            rx="1"
            fill="currentColor"
            className={`${mobileMenuOpacity}`}
          ></rect>
          <rect
            x="6"
            y="21"
            width="20"
            height="2"
            rx="1"
            fill="currentColor"
            transform-origin="16px 22px"
            className={`${mobileMenuBottom}`}
          ></rect>
        </svg>
      </button>
    </div>
  );
};
