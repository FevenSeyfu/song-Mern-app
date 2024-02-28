import styled from '@emotion/styled';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 250px;
  background-color: #9290C3;
  color: #070F2B;
  padding: 20px;
`;

export const Logo = styled.h1`
  width: 100px;
  margin: 0 auto;
  font-family: "Kode Mono", monospace;
  font-style: italic;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const NavLink = styled.a`
  color: #070F2B;
  text-decoration: none;
  &:hover {
    color: #535C91;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  margin-bottom: 20px;
`;