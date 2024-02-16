export interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

export interface SongState {
  songs: Song[];
  isLoading: boolean;
  error: string | null;
}
