import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

function HomePage() {
  const { setActive } = useGlobalContext();
  setActive(0);
  useEffect(() => {}, []);

  return (
    <div className="page">
      <h1 className="page-title">Home</h1>
    </div>
  );
}

export default HomePage;
