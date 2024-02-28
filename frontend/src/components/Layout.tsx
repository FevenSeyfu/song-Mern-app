import React from "react";
import Sidebar from "./Sidebar/SideBar";
import styled from "@emotion/styled";

const LayoutContainer = styled.div`
  display: flex;
`;
const MainContent = styled.main`
  flex: 1;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
        <Sidebar />
        <MainContent>
            {children}
        </MainContent>
    </LayoutContainer>
  );
};

export default Layout