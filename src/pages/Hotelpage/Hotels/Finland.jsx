import { useFetch } from "../../../hooks/useFetch";
import style from "./finland.module.scss";
export const Finland = () => {
  const {
    data: finlandDetails,
    loading,
    error,
  } = useFetch("http://localhost:4000/destinations/finland");

  if (loading) return <div>Loading...</div>;
  if (error || !finlandDetails || !finlandDetails.cities) {
    return <div>Error: Unable to fetch data</div>;
  }

  return (
    <div className={style.container}>
      <p>{finlandDetails.description}</p>
      <div className={style.cityList}>
        {finlandDetails.cities.map((item) => (
          <figure key={item.city_id}>
            <figcaption>
              <img
                src={`../../../src/assets/images/${item.CityImage.city_image_filename}`}
                alt={item.name}
              />
              <p>{item.name}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};
