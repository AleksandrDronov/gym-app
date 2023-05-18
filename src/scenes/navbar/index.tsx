import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/type";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <header className="fixed top-0 z-30 w-full py-6">
      <nav className={`${flexBetween} mx-auto w-5/6 gap-16`}>
        <img alt="logo" src={Logo} />
        <div className={`${flexBetween} w-full`}>
          <div className={`${flexBetween} gap-8 text-sm`}>
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
          <div className={`${flexBetween} gap-8`}>
            <p>Sign</p>
            <button>Become a Member</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
