import React from "react";
import Navbar from "./common/Navbar/Navbar";
import styled from "@emotion/styled";
import Footer from "./common/Footer";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction:column;
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
        <Navbar />
        <MainContent>
            {children}
        </MainContent>
        <Footer />
    </LayoutContainer>
  );
};

export default Layout