// to create new song
export interface NewSong {
  title: string;
  artist: string;
  album: string;
  genre: string;
}

// For updating a song
export interface Song extends NewSong {
  _id: string;
}

export interface SongState {
  songs: Song[];
  isLoading: boolean;
  error: string | null;
}

