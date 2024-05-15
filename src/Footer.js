import React from "react";
import "./Footer.css";

export default function Footer() {
  return ( 
  <footer>
      <hr />
      <div className="mt-3">
      This project was coded by
        <a href="https://github.com/lilbxbori" target="_blank" rel="noreferrer">{""} Marilu Chacon</a
        >, is open-sourced on
        <a href="https://github.com/lilbxbori/shecodes-react-weather-app" target="_blank" rel="noreferrer"
          >{""} GitHub</a
        >
        {""} and hosted on
        <a href="https://shecodes-react-weather-app-mchacon.netlify.app/" target="_blank" rel="noreferrer"
          >{""} Netlify</a
        >
      </div>
    </footer>
    );
   }