import React,{useState} from "react";
import { NavbarContainer, NavLink, Nav, Button } from "./NavbarStyle";
import LogoItem from "./LogoItem";
import CreateSong from "../../CreateSong";
import Modal from "../../Modal/Modal";
import { IoMdAdd } from "react-icons/io";

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );

  const handleOpenModal = (component: React.ReactNode) => {
    setModalContent(component);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };
  return (
    <NavbarContainer>
      <LogoItem />
      <Nav>
        <Button
          onClick={() =>
            handleOpenModal(<CreateSong onClose={handleCloseModal} />)
          }
        >
          <IoMdAdd />
        </Button>
        <NavLink href="/songs">Songs</NavLink>
        <NavLink href="/song-stats">Song Statistics</NavLink>
      </Nav>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        component={modalContent}
      />
    </NavbarContainer>
  );
};

export default Navbar;
