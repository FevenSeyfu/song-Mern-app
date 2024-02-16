import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { fetchSongs,updateSong } from '../features/Song/SongSlice';
import { RootState } from '../app/store';
import { useNavigate,useParams } from 'react-router-dom';

const UpdateSong: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {songs,isLoading,error} = useSelector((state: RootState) => state.songs);
  const { id } = useParams();
  
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [genre, setGenre] = useState('');

  useEffect(()=>{
    dispatch(fetchSongs());
  
  },[dispatch]);

  useEffect(() => {
    const selectedSong = songs.find((song) => song._id === id);

    if (selectedSong) {
      setTitle(selectedSong.title);
      setArtist(selectedSong.artist);
      setAlbum(selectedSong.album);
      setGenre(selectedSong.genre);
    }
  }, [id, songs]);
  const handleUpdate = (e: React.FormEvent) =>{
    e.preventDefault();
    const updatedSong = {
      _id: id || '', 
      title,
      artist,
      album,
      genre,
    };
    dispatch(updateSong(updatedSong));
        
    setTitle('');
    setArtist('');
    setAlbum('');
    setGenre('');
    navigate('/')
  }

  return (
    <form onSubmit={handleUpdate}>
    <h1>Update Song</h1>

    <label>
      Title:
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
    </label>

    <label>
      Artist:
      <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} required />
    </label>

    <label>
      Album:
      <input type="text" value={album} onChange={(e) => setAlbum(e.target.value)} required />
    </label>
    <label>
      Genre:
      <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required />
    </label>

    <button type="submit">Update Song</button>
  </form>
  )
}

export default UpdateSong