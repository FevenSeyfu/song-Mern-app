import React,{useState} from 'react'
import {
    StyledButton,
    Logo,
    LogoH1,
  } from "./NavbarStyle";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

const LogoItem: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Logo>
        <StyledButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoCloseSharp /> : <IoMenu />}
        </StyledButton>
        <LogoH1>Songs</LogoH1>
      </Logo>
  )
}

export default LogoItem