import { useFetch } from "../../../hooks/useFetch";
import style from "./tyskland.module.scss";
export const Tyskland = () => {
  const {
    data: tysklandDetails,
    loading,
    error,
  } = useFetch("http://localhost:4000/destinations/tyskland");

  if (loading) return <div>Loading...</div>;
  if (error || !tysklandDetails || !tysklandDetails.cities) {
    return <div>Error: Unable to fetch data</div>;
  }

  return (
    <div className={style.container}>
      <p>{tysklandDetails.description}</p>
      <div className={style.cityList}>
        {tysklandDetails.cities.map((item) => (
          <figure key={item.city_id}>
            <figcaption>
              <img
                src={`../../../src/assets/images/${item.CityImage.city_image_filename}`}
                alt={item.name}
              />
              <p> {item.name}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};
