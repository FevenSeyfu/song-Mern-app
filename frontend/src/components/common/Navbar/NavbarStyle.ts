import styled from '@emotion/styled';

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #9290C3;
  color: #070F2B;
  padding: 1rem;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 768px) {
    display:none;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LogoH1 = styled.h1`
  font-family: "Kode Mono", monospace;
  font-style: italic;
`;

export const StyledButton = styled.button`
  align-self: center;
  border: none;
  background: none;
  font-size: 2rem;
  color: #070F2B;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-right: 2rem;
`;

export const NavLink = styled.a`
  color: #070F2B;
  text-decoration: none;
  &:hover {
    color: #535C91;
  }
`;

export const Button = styled.button`
  padding: 2px 4px;
  border: 1px solid #070f2b;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 4px;
  font-weight: bold;
  color: #070f2b;
  background-color: #9290c3;
  &:hover {
    color: #9290c3;
    background-color: #070f2b;
  }
`;