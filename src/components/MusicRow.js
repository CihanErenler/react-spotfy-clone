import React from "react";
import SingleMusic from "./SingleMusic";

function MusicRow({ title, musics }) {
  return (
    <section className="music-row">
      <h2 className="row-title">Musics that you like</h2>
      <div className="music-row-wrapper">
        {/* {musics.map((music) => {
          return <SingleMusic {...music} />;
        })} */}
        <SingleMusic />
        <SingleMusic />
        <SingleMusic />
        <SingleMusic />
        <SingleMusic />
        <SingleMusic />
        <SingleMusic />
        <SingleMusic />
      </div>
    </section>
  );
}

export default MusicRow;
