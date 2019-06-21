import React, { useState, useEffect } from "react";
import { breakpoints } from "../../src";

const getScreenWidth = () => window.innerWidth;

const getMedia = screenWidth => {
  const breakpointVals = Object.values(breakpoints);
  let media = "xs";

  breakpointVals.some((val, idx) => {
    const nextVal = breakpointVals[idx + 1] || Infinity;

    if (screenWidth >= val && screenWidth < nextVal) {
      media = Object.keys(breakpoints)[idx];
      return true;
    }

    return false;
  });

  return media;
};

const BreakpointsStory = () => {
  const [screenWidth, setScreenWidth] = useState(getScreenWidth());
  const media = getMedia(screenWidth);
  const handleResize = () => setScreenWidth(getScreenWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ padding: "0 15px 30px 15px" }}>
      <h1>Breakpoints</h1>
      <hr />
      <p>
        <b>{screenWidth}px</b> screen width is <b>{media}</b> media.
      </p>
    </div>
  );
};
export default BreakpointsStory;
