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

export const Logo = styled.img`
  width: 100px;
  margin: 0 auto;
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
  align-self: center;
  text-align: center;
`;