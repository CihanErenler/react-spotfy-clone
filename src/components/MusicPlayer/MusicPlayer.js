import React from "react";
import PlayerArtist from "./PlayerArtist";
import PlayerMedia from "./PlayerMedia";
import PlayerVolume from "./PlayerVolume";

function MusicPlayer() {
  return (
    <section className="music-player">
      <PlayerArtist />
      <PlayerMedia />
      <PlayerVolume />
    </section>
  );
}

export default MusicPlayer;
