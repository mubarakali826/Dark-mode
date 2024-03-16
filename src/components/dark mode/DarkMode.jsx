import React, { useEffect, useState } from "react";
import './DarkMode.css'

function DarkMode() {
    const [theme,setTheme]=useState('light')
    const toggleTheme=()=>{
        const newTheme=theme=="light"?"dark":"light";
        setTheme(newTheme);
        localStorage.setItem("selectedTheme",newTheme);
    }
    useEffect(()=>{
    const selectedTheme=localStorage.getItem('selectedTheme');
    if(selectedTheme){
      setTheme(selectedTheme);
    }
    },[]);
    useEffect(()=>{
      document.body.setAttribute("data-theme",theme);
    },[theme]);
  return (
      <div className="dark_mode">
        <input
          type="checkbox"
          className="dark_mode_input"
          id="darkmode-toggle"
          onChange={toggleTheme}
          checked={theme === "dark"}
        />
        <label htmlFor="darkmode-toggle" className="dark_mode_label">
            <img src="sun.png" alt="sun" className="sun"/>
            <img src="moon.png" alt="moon" className="moon"/>
        </label>
      </div>
  );
}

export default DarkMode;
