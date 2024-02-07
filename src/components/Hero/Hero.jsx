import style from "./hero.module.scss"

export const Hero = () => {
  return (
    <>
      <div className={style.heroStyle}>
        <div className="hero-container">
        <h1>Velkommen til Hotel Overlook Online</h1>
        </div>
        <img src="./src/assets/images/frankfurt-skyline-germany.jpg"></img>

      </div>
    </>
  );
};
