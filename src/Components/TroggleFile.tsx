import { useState } from "react";

const TroggleFile = () => {
  const [click, setClick] = useState(true);

  return (
    <div>
      <button
        onClick={() => setClick(!click)}
        style={{
          backgroundColor: click ? "blue" : "red",
          border: click ? "2px solid black" : "2px solid white",
          height: "3rem",
          width: "12rem",
          fontSize: "2rem",
          padding: "5px 6px",
          marginLeft: "32rem",
          color: "white",
          fontWeight: "600",
          cursor: "pointer",
          outline: "none",
          transition: "0.3s",
          borderRadius: "12px",
          marginTop: "1rem",
        }}
      >
        {click ? "See More" : "See Less"}
      </button>
    </div>
  );
};

export default TroggleFile;
