import React from "react";
import { NavLink, MobileMenuContainer } from "./NavbarStyle";
import CreateSongButton from "./CreateSongButton";

interface SidebarProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <MobileMenuContainer isOpen={isOpen}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <CreateSongButton /> Add New
      </div>
      <NavLink href="/songs">Songs</NavLink>
      <NavLink href="/song-stats">Song Statistics</NavLink>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
