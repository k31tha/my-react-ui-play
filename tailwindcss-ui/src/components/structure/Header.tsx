import * as React from "react";
import { Link } from "react-router-dom";
import { MainMenu, MenuLinks } from "./MainMenu";
import { MainMobileMenu, MobileMenuButton } from "./MainMobileMenu";

const menu: Array<MenuLinks> = [
  { url: "/clubs", urlText: "clubs" },
  { url: "/about", urlText: "about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);
  return (
    <header className="pb-4 border-b-6 border-black">
      <div className="p-4 flex justify-between">
        <h1 className="bg-green-700 text-white inline-block p-2 uppercase text-4.5xl transform -skew-x-6">
          <Link to="/" className="shadow">
            nls ui demo
          </Link>
        </h1>
        <MainMenu menuItems={menu} />
        <MobileMenuButton
          mobileMenuAction={() => {
            setMobileMenuOpen(!mobileMenuOpen);
          }}
          mobileMenuOpen={mobileMenuOpen}
        />
      </div>
      <MainMobileMenu menuItems={menu} mobileMenuOpen={mobileMenuOpen} />
    </header>
  );
}
