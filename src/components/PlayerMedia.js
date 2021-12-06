import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import {
  RiSkipBackFill,
  RiSkipForwardFill,
  RiPlayFill,
  RiPauseLine,
} from "react-icons/ri";

function PlayerMedia() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="player-media">
      <div className="player-media-container">
        <div className="player-media-buttons">
          <RiSkipBackFill className="player-media-icon" />
          {isPlaying ? (
            <RiPlayFill
              className="player-media-icon circle"
              onClick={() => setIsPlaying(!isPlaying)}
            />
          ) : (
            <RiPauseLine
              className="player-media-icon circle"
              onClick={() => setIsPlaying(!isPlaying)}
            />
          )}
          <RiSkipForwardFill className="player-media-icon" />
        </div>
        <Slider
          aria-label="time-indicator"
          size="small"
          // value={position}
          min={0}
          step={1}
          // max={duration}
          sx={{
            color: "#66d36e",
            height: 5,
            "& .MuiSlider-thumb": {
              width: 10,
              height: 10,
              color: "#fff",
              transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
              "&:hover, &.Mui-focusVisible": {
                boxShadow: `0px 0px 0px 5px
              rgba(255, 255, 255, 0)`,
              },
              "&.Mui-active": {
                width: 15,
                height: 15,
              },
            },
            "& .MuiSlider-rail": {
              color: "#535353",
            },
          }}
        />
      </div>
    </section>
  );
}

export default PlayerMedia;
