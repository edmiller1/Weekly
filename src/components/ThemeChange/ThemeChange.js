import React, { useState, useEffect } from "react";

export const ThemeChange = () => {
  const [themeState, setThemeState] = useState(false);

  const handleChange = () => {
    setThemeState(!themeState);
    if (themeState) {
      localStorage.setItem("Theme", "dark");
      document.body.classList.add("dark-mode");
    } else {
      localStorage.setItem("Theme", "light");
      document.body.classList.remove("dark-mode");
    }
  };

  useEffect(() => {
    const getTheme = localStorage.getItem("Theme");
    if (getTheme === "dark") {
      return document.body.classList.add("dark-mode");
    }
  });

  let emoji;

  if (themeState) {
    emoji = (
      <img
        className="w-8 h-8 cursor-pointer hover:opacity-70 transition duration-200"
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/full-moon_1f315.png"
        alt="full-moon-emoji"
      />
    );
  } else {
    emoji = (
      <img
        className="w-8 h-8 cursor-pointer hover:opacity-70 transition duration-200"
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/279/sun_2600-fe0f.png"
        alt="sun"
      />
    );
  }

  return <div onClick={handleChange}>{emoji}</div>;
};
