import React from "react";
import { SidebarContainer, Logo, NavLink, Nav, Footer } from "./SidebarStyle";

const Sidebar: React.FC = () => (
  <SidebarContainer>
    <Logo>Songs</Logo>
    <Nav>
      <NavLink href="/songs">Songs</NavLink>
      <NavLink href="/song-stats">Song Statistics</NavLink>
    </Nav>
    <Footer>
      &copy; Copyright {new Date().getFullYear()}.Song app. Built by{" "}
      <NavLink href="https://github.com/FevenSeyfu">Feven Seyfu</NavLink>
    </Footer>
  </SidebarContainer>
);

export default Sidebar;
