import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import PlaylistPage from "./pages/PlaylistPage";
import LibraryPage from "./pages/LibraryPage";
import ErrorPage from "./pages/ErrorPage";
import SearchPage from "./pages/SearchPage";
import MusicPlayer from "./components/MusicPlayer";
import React from "react";

function App() {
  return (
    <Container>
      <Router>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/library" element={<LibraryPage />} />
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/playlist/:id" element={<PlaylistPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <MusicPlayer />
      </Router>
    </Container>
  );
}

export default App;
