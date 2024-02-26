import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../features/Song/SongSlice";
import { Song } from "../types/types";
import { RootState } from "../app/store";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import Modal from "./Modal/Modal";
import CreateSong from "./CreateSong";
import UpdateSong from "./UpdateSong";
import DeleteSong from "./DeleteSong";
import { Flex, Heading, Button, Image,Text,Box } from "rebass";

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Flex flexDirection={"column"}>
      <Flex
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Heading fontSize={"2rem"} color={"#c1121f"}>
          Songs
        </Heading>
        <Button
          onClick={() =>
            handleOpenModal(<CreateSong onClose={handleCloseModal} />)
          }
          backgroundColor="white"
          color="#c1121f"
          fontSize={"2rem"}
        >
          <IoMdAdd />
        </Button>
      </Flex>
      {songs.map((song: Song) => {
        return (
          <Box key={song._id}>
            <Text>
              <Image
                src="../assets/sound-icon.png"
              />
              <Text>
                <h2>{song.title}</h2>
                <p>{song.artist}</p>
              </Text>
              <Text>
                <p>{song.album}</p>
              </Text>
              <Text>
                <p>{song.genre}</p>
              </Text>
              <Text>
                <button
                  onClick={() =>
                    handleOpenModal(
                      <UpdateSong onClose={handleCloseModal} id={song._id} />
                    )
                  }
                >
                  <CiEdit />
                </button>
                <button
                  onClick={() =>
                    handleOpenModal(
                      <DeleteSong onClose={handleCloseModal} id={song._id} />
                    )
                  }
                >
                  <MdOutlineDeleteOutline />
                </button>
              </Text>
            </Text>
          </Box>
        );
      })}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        component={modalContent}
      />
    </Flex>
  );
};

export default ListSongs;
