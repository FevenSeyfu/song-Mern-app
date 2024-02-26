import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSong } from "../features/Song/SongSlice";
import { RootState } from "../app/store";

interface DeleteSongProps {
  onClose: () => void;
  id:string
}
const DeleteSong: React.FC<DeleteSongProps>= ({onClose,id}) => {
  const dispatch = useDispatch();

  const { songs, isLoading } = useSelector(
    (state: RootState) => state.songs
  );

  const selectedSong = songs.find((song) => song._id === id);

  const handleDelete = async () => {
    try {
      if (id) {
        dispatch(deleteSong(id));
        onClose();
      }
    } catch (error) {
      console.error("Error deleting song:", error);
    }
  };
  return (
    <form>
      <h1>Delete Song</h1>
      <p>
        Are you sure you want to delete <b>{selectedSong && selectedSong.title}</b> by {" "}
        <b>{selectedSong && selectedSong.artist}</b>?
      </p>

      <button onClick={() => onClose()} disabled={isLoading}>Cancel</button>
      <button onClick={handleDelete} disabled={isLoading}>Delete</button>
    </form>
  );
};

export default DeleteSong;
