import { useState, useEffect } from "react";
import style from "./hero.module.scss"
const Images = [
  "./src/assets/images/frankfurt-skyline-germany.jpg",
  "./src/assets/images/center-square-wroclaw.jpg",
  "./src/assets/images/the-blue-lagoon.jpg",
  "./src/assets/images/fishmarket-hamborg.jpg",
  "./src/assets/images/sunset-mountains-norway.jpg",
]
export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(()=> {
    const intervalId = setInterval(()=> {
     setCurrentImageIndex(prevIndex => (prevIndex +1) % Images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  

  
  return (
    <>
      <div className={style.heroStyle}>
        <div className="hero-container">
        <h1>Velkommen til Hotel Overlook Online</h1>
        </div>
        <img src={Images[currentImageIndex]}></img>

      </div>
    </>
  );
};
