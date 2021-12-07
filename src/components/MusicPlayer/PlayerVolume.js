import React from "react";
import Slider from "@mui/material/Slider";
import {
  BsFillVolumeDownFill,
  BsFillVolumeUpFill,
  BsFillVolumeMuteFill,
} from "react-icons/bs";

function PlayerVolume() {
  return (
    <section className="player-volume">
      <div className="volume-wrapper">
        <BsFillVolumeDownFill className="volume-icon" />
        <Slider
          aria-label="Volume"
          valueLabelDisplay="auto"
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
        <BsFillVolumeUpFill className="volume-icon" />
      </div>
    </section>
  );
}

export default PlayerVolume;
