import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { createSong } from '../features/Song/SongSlice';
import { RootState } from "../app/store";

interface CreateSongProps {
  onClose: () => void;
}
const CreateSong: React.FC<CreateSongProps> = ({onClose}) => {
  const dispatch = useDispatch();
  
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault();
    const song = { title, artist, album , genre}
    dispatch(createSong(song));
    setTitle('');
    setArtist('');
    setAlbum('');
    setGenre('');
    onClose();
  }
  const {songs,isLoading,error} = useSelector((state: RootState) => state.songs);
  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Song</h1>

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

      <button type="submit" disabled={isLoading}>{isLoading? 'Loading' : 'Create Song '}</button>
    </form>
  )
}

export default CreateSong