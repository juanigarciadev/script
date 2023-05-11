import { useRef, useState } from "react";
import Navbar from "./Navbar";

const NavbarContainer = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const dropdownRef = useRef();
  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== dropdownRef.current) {
      setOpen(false);
    }
  });
  return (
    <Navbar
      open={open}
      setOpen={setOpen}
      menuRef={menuRef}
      dropdownRef={dropdownRef}
    />
  );
};

export default NavbarContainer;
