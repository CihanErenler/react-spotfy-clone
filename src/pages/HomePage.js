import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import MusicRow from "../components/MusicRow";

function HomePage() {
  const { setActive, getCurrentTime } = useGlobalContext();

  useEffect(() => {
    setActive(0);
  }, []);

  return (
    <div className="page">
      <h1 className="page-title">{getCurrentTime()}</h1>
      {/* <MusicRow /> */}
    </div>
  );
}

export default HomePage;
