import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSong } from "../features/Song/SongSlice";
import { RootState } from "../app/store";
import { IoClose } from "react-icons/io5";
import {
  CloseButton,
  StyledForm,
  StyledH1,
  StyledLabel,
  StyledButton,
  StyledInput,
} from "./FormStyle";

interface CreateSongProps {
  onClose: () => void;
}
const CreateSong: React.FC<CreateSongProps> = ({ onClose }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const song = { title, artist, album, genre };
    await dispatch(createSong(song));
    setTitle("");
    setArtist("");
    setAlbum("");
    setGenre("");
    onClose();
  };
  const { songs, isLoading, error } = useSelector(
    (state: RootState) => state.songs
  );
  return (
    <>
      <CloseButton onClick={() => onClose()}>
        <IoClose size={30} style={{ textAlign: "right" }} />
      </CloseButton>
      <StyledForm onSubmit={handleSubmit}>
        <StyledH1>Create Song</StyledH1>

        <StyledLabel>
          Title:
          <StyledInput
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </StyledLabel>

        <StyledLabel>
          Artist:
          <StyledInput
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
        </StyledLabel>

        <StyledLabel>
          Album:
          <StyledInput
            type="text"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
            required
          />
        </StyledLabel>
        <StyledLabel>
          Genre:
          <StyledInput
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </StyledLabel>

        <StyledButton type="submit" disabled={isLoading}>
          {isLoading ? "Loading" : "Create Song "}
        </StyledButton>
      </StyledForm>
    </>
  );
};

export default CreateSong;
