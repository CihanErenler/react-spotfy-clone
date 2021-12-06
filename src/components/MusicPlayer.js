import React from "react";
import PlayerArtist from "./PlayerArtist";
import PlayerMedia from "./PlayerMedia";

function MusicPlayer() {
  return (
    <section className="music-player">
      <PlayerArtist />
      <PlayerMedia />
    </section>
  );
}

export default MusicPlayer;
