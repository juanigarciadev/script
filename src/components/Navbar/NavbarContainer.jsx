import { useRef, useState } from "react";
import Navbar from "./Navbar";

const NavbarContainer = () => {
  const [open, setOpen] = useState(false);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const menuRef = useRef();
  const dropdownRef = useRef();
  const barsRef = useRef();
  const navToggledRef = useRef();
  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== dropdownRef.current) {
      setOpen(false);
    }
  });

  window.addEventListener("click", (e) => {
    if (e.target !== barsRef.current && e.target !== navToggledRef.current) {
      setMobileNavbar(false);
    }
  });

  return (
    <Navbar
      open={open}
      setOpen={setOpen}
      menuRef={menuRef}
      dropdownRef={dropdownRef}
      mobileNavbar={mobileNavbar}
      setMobileNavbar={setMobileNavbar}
      barsRef={barsRef}
      navToggledRef={navToggledRef}
    />
  );
};

export default NavbarContainer;
