import React, { useState } from "react";
import cover from "../assets/album-covers/1.jpg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function PlayerArtist() {
  const [liked, setLiked] = useState(false);

  return (
    <section className="player-artist">
      <div className="player-image-wrap">
        <img src={cover} alt="cover" />
      </div>
      <div className="player-info">
        <p className="player-song">Starboy</p>
        <p className="player-name">The Weekend</p>
      </div>
      <div className="player-artist-icons">
        {liked ? (
          <AiFillHeart
            className="player-heart active"
            onClick={() => setLiked(!liked)}
          />
        ) : (
          <AiOutlineHeart
            className="player-heart"
            onClick={() => setLiked(!liked)}
          />
        )}
      </div>
    </section>
  );
}

export default PlayerArtist;
