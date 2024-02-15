import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { create } from "domain";

interface Song {
  title: string;
  artist: string;
  album: string;
  genre: string;
}

interface SongState {
  songs: Song[];
  isLoading: boolean;
  error: string | null;
}

const initialState: SongState = {
  songs: [],
  isLoading: false,
  error: null,
};

export const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    // list song
    fetchSongs: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchSongsSuccess: (state, action: PayloadAction<Song[]>) => {
      state.songs = action.payload;
      state.isLoading = false;
    },
    fetchSongsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // create song
    createSong: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    createSongSuccess: (state, action: PayloadAction<Song>) => {
      state.songs.push(action.payload);
      state.isLoading = false;
    },
    createSongFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // update song
    updateSong: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    updateSongSuccess: (state, action: PayloadAction<Song>) => {
      const index = state.songs.findIndex(
        (song) => song.title === action.payload.title
      );
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
      state.isLoading = false;
    },
    updateSongFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // delete song
    deleteSong: (state) => {
      (state.isLoading = true), (state.error = null);
    },
    deleteSongSuccess: (state, action: PayloadAction<{ title: string; artist: string }>) => {
        state.isLoading = false;
        const { title, artist } = action.payload;
        state.songs = state.songs.filter((song) => !(song.title === title && song.artist === artist));
    },
    deleteSongFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // song statistics
    fetchSongsStats: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    FetchSongsStatsSuccess: (state, action: PayloadAction<Song[]>) => {
      state.songs = action.payload;
      state.isLoading = false;
    },
    FetchSongsStatsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    reset(state) {
        Object.assign(state, initialState)
    }
  },
});

// fetch,create,update,delete,songsStats
export const { 
    fetchSongs, 
    fetchSongsSuccess, 
    fetchSongsFailure,
    createSong,
    createSongSuccess,
    createSongFailure,
    updateSong,
    updateSongSuccess,
    updateSongFailure,
    deleteSong,
    deleteSongSuccess,
    deleteSongFailure,
    fetchSongsStats,
    FetchSongsStatsSuccess,
    FetchSongsStatsFailure
} = songSlice.actions;
export default songSlice.reducer;