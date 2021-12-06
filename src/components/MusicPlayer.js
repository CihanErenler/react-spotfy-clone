import React from "react";
import Slider from "@mui/material/Slider";

function MusicPlayer() {
  return (
    <section className="music-player">
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
            "&:hover, &.Mui-focusVisible": {
              boxShadow: `0px 0px 0px 8px
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
    </section>
  );
}

export default MusicPlayer;
