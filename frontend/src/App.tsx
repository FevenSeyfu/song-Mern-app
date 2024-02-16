import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateSong from "./components/CreateSong";
import DeleteSong from "./components/DeleteSong";
import ListSongs from "./components/ListSongs";
import ShowSongStats from "./components/ShowSongStats";
import UpdateSong from "./components/UpdateSong";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ListSongs />} />
      <Route path="/create" element={<CreateSong />} />
      <Route path="delete/:id" element={<DeleteSong />} />
      <Route path="update/:id" element={<UpdateSong />} />
      <Route path="/stats" element={<ShowSongStats />} />
    </Routes>
  </BrowserRouter>
);

export default App;
