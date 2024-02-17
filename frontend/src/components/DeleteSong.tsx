import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs, deleteSong } from "../features/Song/SongSlice";
import { RootState } from "../app/store";
import { useNavigate, useParams } from "react-router-dom";

const DeleteSong: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { songs, isLoading, error } = useSelector(
    (state: RootState) => state.songs
  );
  const { id } = useParams<{ id: string }>();
  useEffect(()=>{
    dispatch(fetchSongs());
  
  },[dispatch]);
  const selectedSong = songs.find((song) => song._id === id);

  const handleDelete = async () => {
    try {
      if (id) {
        dispatch(deleteSong(id));
        navigate("/");
        if (isLoading) {
          return <p>Loading...</p>;
        }
        if (error) {
          return <div>Error: {error}</div>;
        }
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

      <button onClick={() => navigate("/")}>Cancel</button>
      <button onClick={handleDelete}>Delete</button>
    </form>
  );
};

export default DeleteSong;
