import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../features/Song/SongSlice";
import { Song } from "../types/types";
import { RootState } from "../app/store";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaSpinner } from "react-icons/fa6";
import Modal from "./Modal/Modal";

import UpdateSong from "./UpdateSong";
import DeleteSong from "./DeleteSong";

import { Flex, Image, Text, Box } from "rebass";
import styled from "@emotion/styled";
import Layout from "./Layout";

const Button = styled.button`
  padding: 2px 4px;
  margin: 5px;
  background: none;
  border: 1px solid #9290c3;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 4px;
  color: #9290c3;
  font-weight: bold;
  &:hover {
    color: #070f2b;
    background-color: #9290c3;
  }
  @media (max-width: 768px) {
    padding: 2px 3px;
    margin: 3px;
    font-size: 1rem;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const SongImage = styled(Image)`
  height: 36px;
  padding-right: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ResponsiveFlex = styled(Flex)`
  padding: 1rem;
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;
const ListSongs: React.FC = () => {
  const dispatch = useDispatch();

  const { songs, isLoading, error } = useSelector(
    (state: RootState) => state.songs
  );

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

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Layout>
      <ResponsiveFlex flexDirection={"column"}>
      <Flex
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text width={"25%"} fontWeight={"bold"}>
          Song
        </Text>
        <Text width={"25%"} fontWeight={"bold"}>
          Album
        </Text>
        <Text fontWeight={"bold"}>Genre</Text>
        <Text fontWeight={"bold"}>Actions</Text>
      </Flex>
      <hr
        style={{
          width: "100%",
          borderColor: "#9290C3",
          borderWidth: "2px",
          marginBottom: "1rem",
        }}
      />
      {isLoading ? (
        <Text
          fontWeight="bold"
          textAlign={"center"}
          fontSize={"1.5rem"}
          marginY={"10%"}
        >
          <FaSpinner />
          Loading...
        </Text>
      ) : (
        songs.map((song: Song, index: number) => {
          return (
            <>
              <Flex
                key={song._id}
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Flex alignItems={"center"} width={"25%"}>
                  <SongImage src="../../assets/sound-icon.png" />
                  <Box>
                    <h3>{song.title}</h3>
                    <p>By:{song.artist}</p>
                  </Box>
                </Flex>
                <Text width={"25%"}>{song.album}</Text>
                <Text textAlign={"center"}>{song.genre}</Text>
                <ButtonContainer>
                  <Button
                    onClick={() =>
                      handleOpenModal(
                        <UpdateSong onClose={handleCloseModal} id={song._id} />
                      )
                    }
                  >
                    <CiEdit />
                  </Button>
                  <Button
                    onClick={() =>
                      handleOpenModal(
                        <DeleteSong onClose={handleCloseModal} id={song._id} />
                      )
                    }
                  >
                    <MdOutlineDeleteOutline />
                  </Button>
                </ButtonContainer>
              </Flex>
              {index !== songs.length - 1 && (
                <hr
                  style={{
                    width: "100%",
                    borderColor: "#9290C3",
                    marginBottom: "1rem",
                  }}
                />
              )}
            </>
          );
        })
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        component={modalContent}
      />
    </ResponsiveFlex>
    </Layout>
  );
};

export default ListSongs;
