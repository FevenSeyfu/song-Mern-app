import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateSong from "./components/CreateSong";
import DeleteSong from "./components/DeleteSong";
import ListSongs from "./components/ListSongs";
import ShowSongStats from "./components/SongStats/ShowSongStats";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ListSongs />} />
      <Route path="/song-stats" element={<ShowSongStats />} />
    </Routes>
  </BrowserRouter>
);

export default App;
