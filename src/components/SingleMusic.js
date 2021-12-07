import React from "react";
import { IoPlay, IoPause } from "react-icons/io5";
import { useGlobalContext } from "../context";

function SingleMusic() {
  const { playingNow } = useGlobalContext();

  return (
    <article className="single-music">
      <div className="single-music-img-wrapper">
        <img
          src="https://res.cloudinary.com/spotifyclone/image/upload/w_200/v1638824774/spotify-clone/images/a8_aucovd.jpg"
          alt="cover"
        />
      </div>
      <div className="single-music-info">
        <p className="single-music-name">Oh yeah baby</p>
        <p className="single-music-artist">Cihan Erenler</p>
      </div>
      <IoPlay className="single-play-icon" />
      {/* <IoPause className="single-play-icon" /> */}
    </article>
  );
}

export default SingleMusic;
