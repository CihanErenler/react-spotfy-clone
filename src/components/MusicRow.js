import React from "react";
import SingleMusic from "./SingleMusic";

function MusicRow({ title, musics }) {
  return (
    <section className="music-row">
      <h2 className="row-title">{title}</h2>
      <div className="music-row-wrapper">
        {musics.map((music) => {
          return <SingleMusic {...music} />;
        })}
      </div>
    </section>
  );
}

export default MusicRow;
