import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { createSong } from '../features/Song/SongSlice';
import { useNavigate } from 'react-router-dom';

const CreateSong: React.FC  = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
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
    navigate('/')
  }
  
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

      <button type="submit">Create Song</button>
    </form>
  )
}

export default CreateSong