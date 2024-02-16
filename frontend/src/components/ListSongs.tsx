import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchSongs } from '../features/Song/SongSlice';
import { Song } from '../types/types';
import { RootState } from '../app/store';

const ListSongs : React.FC  = () => {
  const dispatch = useDispatch();
  const {songs,isLoading,error} = useSelector((state: RootState) => state.songs);
  
  useEffect(()=>{
    dispatch(fetchSongs());
    
  },[dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
        <h1>Songs</h1>
        {songs.map((song:Song)=>{
            return (
              <div key={song._id}>
                <div>
                  <h2>{song.title}</h2>
                  <p>{song.artist}</p>
                </div>
                <p>{song.album}</p>
                <p>{song.genre}</p>
              </div>
            );
          })
        }
    </div>
  )
}

export default ListSongs