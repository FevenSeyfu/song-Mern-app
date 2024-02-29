import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongsStats } from "../features/Song/SongSlice";
import { SongStats } from "../types/types";
import { RootState } from "../app/store";
import Layout from "./Layout";

const ShowSongStats: React.FC = () => {
  const dispatch = useDispatch();
  const { songStats, isLoading, error } = useSelector(
    (state: RootState) => state.songs
  );

  useEffect(() => {
    dispatch(fetchSongsStats());
  }, [dispatch]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Layout>
      {songStats && (
        <div>
          <ul>
            <li>
              Songs<span>{songStats.totalSongs}</span>
            </li>
            <li>
              Artists <span>{songStats.totalArtists}</span>
            </li>
            <li>
              Albums <span>{songStats.totalAlbums}</span>
            </li>
            <li>
              Genres <span>{songStats.totalGenres}</span>
            </li>
          </ul>
          <div>
            <h2>By Genre</h2>
            {songStats.songsByGenre.map((genreInfo) => (
              <ul key={genreInfo._id}>
                <h3>
                  {genreInfo._id} {genreInfo.TotalSongsByGenre}
                </h3>
                  {genreInfo.Songs.map((song: string) => (
                    <li key={song}>
                      {song},{""}
                    </li>
                  ))}
              </ul>
            ))}
          </div> 
          <div>
            <h2>By Artist</h2>
            {songStats.songsByArtist.map((artistInfo) => (
              <ul key={artistInfo._id}>
                <h3>
                  {artistInfo._id} {artistInfo.TotalSongsByArtist}
                </h3>
                  {artistInfo.Songs.map((song: string) => (
                    <li key={song}>
                      {song},{""}
                    </li>
                  ))}
              </ul>
            ))}
          </div>
          <div>
            <h2>By Album</h2>
            {songStats.songsByAlbum.map((albumInfo) => (
              <ul key={albumInfo._id}>
                <h3>
                  {albumInfo._id} {albumInfo.TotalSongsByAlbum}
                </h3>
                  {albumInfo.Songs.map((song: string) => (
                    <li key={song}>
                      {song},{""}
                    </li>
                  ))}
              </ul>
            ))}
          </div>
          <div>
            <h2>Albums By Artist</h2>
            {songStats.albumsByArtist.map((albumInfo) => (
              <ul key={albumInfo._id}>
                <h3>
                  {albumInfo._id} {albumInfo.TotalAlbums}
                </h3>
                  {albumInfo.Albums.map((album: string) => (
                    <li key={album}>
                      {album},{""}
                    </li>
                  ))}
              </ul>
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ShowSongStats;
